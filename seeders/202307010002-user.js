'use strict';

const { userIds, organizationIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Users', [
      {
        id: userIds.alice,
        full_name: 'Alice Smith',
        email_address: 'alice@zsi.at',
        country: 'Austria',
        designation: 'Project Coordinator',
        associated_organization: organizationIds.zsi,
        createdAt: now,
        updatedAt: now
      },
      {
        id: userIds.bob,
        full_name: 'Bob Garcia',
        email_address: 'bob@uja.es',
        country: 'Spain',
        designation: 'Researcher',
        associated_organization: organizationIds.uja,
        createdAt: now,
        updatedAt: now
      },
      {
        id: userIds.charlie,
        full_name: 'Charlie Papadopoulos',
        email_address: 'charlie@mino.gr',
        country: 'Greece',
        designation: 'Developer',
        associated_organization: organizationIds.minoan,
        createdAt: now,
        updatedAt: now
      },
      {
        id: userIds.david,
        full_name: 'David Miller',
        email_address: 'david@zsi.at',
        country: 'Austria',
        designation: 'Researcher',
        associated_organization: organizationIds.zsi,
        createdAt: now,
        updatedAt: now
      },
      {
        id: userIds.eva,
        full_name: 'Eva Rodriguez',
        email_address: 'eva@uja.es',
        country: 'Spain',
        designation: 'Developer',
        associated_organization: organizationIds.uja,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      id: [
        userIds.alice,
        userIds.bob,
        userIds.charlie,
        userIds.david,
        userIds.eva
      ]
    }, {});
  }
};
