"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::artista.artista", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::artista.artista").findOne({
      where: { slug: id },
      populate: ["Foto"],
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
