'use strict';

/**
 * prensa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prensa.prensa');
