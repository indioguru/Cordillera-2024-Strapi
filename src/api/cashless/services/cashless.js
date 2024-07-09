'use strict';

/**
 * cashless service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cashless.cashless');
