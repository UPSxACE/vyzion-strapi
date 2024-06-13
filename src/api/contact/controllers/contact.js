const { createCoreController } = require("@strapi/strapi").factories;

const { sanitize, validate } = require("@strapi/utils");

module.exports = createCoreController("api::contact.contact", ({ strapi }) => ({
  /**
   * As the controller action is named
   * exactly like the original `create` action provided by the core controller,
   * it overwrites it.
   */
  async create(ctx) {
    const contentType = strapi.contentType("api::contact.contact");

    const sanitizedBody = await sanitize.contentAPI.input(
      ctx.request.body.data,
      contentType,
      { auth: ctx.state.auth }
    );
    await this.validateInput(sanitizedBody.data, ctx);

    const entities = await strapi.entityService.create(contentType.uid, {
      data: sanitizedBody,
    });

    return await sanitize.contentAPI.output(entities, contentType, {
      auth: ctx.state.auth,
    });
  },
}));
