'use strict';

const { organizationIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Organizations', [
      {
        id: organizationIds.zsi,
        org_name: 'ZSI',
        country: 'Austria',
        createdAt: now,
        updatedAt: now
      },
      {
        id: organizationIds.uja,
        org_name: 'UJA',
        country: 'Spain',
        createdAt: now,
        updatedAt: now
      },
      {
        id: organizationIds.minoan,
        org_name: 'MINOAN',
        country: 'Greece',
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Organizations', {
      id: [organizationIds.zsi, organizationIds.uja, organizationIds.minoan]
    }, {});
  }
};
