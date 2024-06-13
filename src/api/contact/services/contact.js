const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::contact.contact", ({ strapi }) => ({
  async create(params) {
    // NOTE: using entity service means you won't use this service
    const result = await super.create(params);
    return result;
  },
}));
