'use strict';

const { userRoleIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('UserRoles', [
      {
        id: userRoleIds.coordinator,
        role_id: 1,
        title: 'Project Coordinator',
        description: 'Leads the project',
        createdAt: now,
        updatedAt: now
      },
      {
        id: userRoleIds.researcher,
        role_id: 2,
        title: 'Researcher',
        description: 'Conducts research',
        createdAt: now,
        updatedAt: now
      },
      {
        id: userRoleIds.developer,
        role_id: 3,
        title: 'Developer',
        description: 'Builds the software',
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserRoles', {
      id: [userRoleIds.coordinator, userRoleIds.researcher, userRoleIds.developer]
    }, {});
  }
};
