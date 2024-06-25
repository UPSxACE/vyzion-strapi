# Creating multi-stage build for production
FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --only=production
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN npm run build

# Creating final production image
FROM node:18-alpine

# Custom build arguments here
ARG CERTRESOLVER
ARG HOSTNAME
# Set labels using build arguments
LABEL "traefik.enable"="true"
LABEL "traefik.http.routers.vystrapi.rule"="Host(`$HOSTNAME`)"
LABEL "traefik.http.routers.vystrapi.entrypoints"="websecure"
LABEL "traefik.http.routers.vystrapi.tls"="true"
LABEL "traefik.http.routers.vystrapi.tls.certresolver"="$CERTRESOLVER"
LABEL "traefik.http.routers.vystrapi.service"="vystrapi-service"
LABEL "traefik.http.services.vystrapi-service.loadbalancer.server.port"="1337"
LABEL "io.portainer.accesscontrol.public"="true"

RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
