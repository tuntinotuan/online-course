'use strict';

/**
 * purchased-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::purchased-course.purchased-course');
