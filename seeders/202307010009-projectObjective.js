'use strict';

const { projectObjectiveIds, kerIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('ProjectObjectives', [
      {
        id: projectObjectiveIds.po1,
        title: 'Improve collaboration',
        description: 'Enhance teamwork across partners',
        ker: [kerIds.ker1],
        createdAt: now,
        updatedAt: now
      },
      {
        id: projectObjectiveIds.po2,
        title: 'Deliver innovative solutions',
        description: 'Provide cutting-edge research outputs',
        ker: [kerIds.ker1, kerIds.ker2],
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProjectObjectives', {
      id: [projectObjectiveIds.po1, projectObjectiveIds.po2]
    }, {});
  }
};
