"use strict";

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::contact.contact", {
  only: ["create", "find"],
  config: {
    create: {
      //   auth: false, // set the route to bypass the normal Strapi authentication system
      //   policies: ["is-owner-review"], // set the route to use a custom policy
      middlewares: ["api::contact.notification-email"],
    },
  },
});
