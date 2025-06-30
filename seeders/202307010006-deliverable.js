'use strict';

const { deliverableIds, workPackageIds, taskIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Deliverables', [
      {
        id: deliverableIds.d1,
        deliverable_number: 'D1.1',
        title: 'Project Handbook',
        wp: workPackageIds.wp1,
        task: [taskIds.t1],
        lead_beneficiary: 'ZSI',
        reviewers: ['UJA'],
        createdAt: now,
        updatedAt: now
      },
      {
        id: deliverableIds.d2,
        deliverable_number: 'D2.1',
        title: 'Research Report',
        wp: workPackageIds.wp2,
        task: [taskIds.t3],
        lead_beneficiary: 'UJA',
        reviewers: ['ZSI'],
        createdAt: now,
        updatedAt: now
      },
      {
        id: deliverableIds.d3,
        deliverable_number: 'D2.2',
        title: 'Prototype',
        wp: workPackageIds.wp2,
        task: [taskIds.t4],
        lead_beneficiary: 'MINOAN',
        reviewers: ['ZSI', 'UJA'],
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Deliverables', {
      id: [deliverableIds.d1, deliverableIds.d2, deliverableIds.d3]
    }, {});
  }
};
