'use strict';

const { kerIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('KERs', [
      {
        id: kerIds.ker1,
        title: 'Knowledge Asset 1',
        description: 'First key exploitable result',
        createdAt: now,
        updatedAt: now
      },
      {
        id: kerIds.ker2,
        title: 'Knowledge Asset 2',
        description: 'Second key exploitable result',
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('KERs', {
      id: [kerIds.ker1, kerIds.ker2]
    }, {});
  }
};
