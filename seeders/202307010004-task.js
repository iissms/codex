'use strict';

const { taskIds, workPackageIds, userIds, organizationIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Tasks', [
      {
        id: taskIds.t1,
        task_number: '1.1',
        associated_wp: workPackageIds.wp1,
        title: 'Set up management framework',
        task_leader: userIds.alice,
        task_leading_organization: organizationIds.zsi,
        createdAt: now,
        updatedAt: now
      },
      {
        id: taskIds.t2,
        task_number: '1.2',
        associated_wp: workPackageIds.wp1,
        title: 'Reporting and meetings',
        task_leader: userIds.david,
        task_leading_organization: organizationIds.zsi,
        createdAt: now,
        updatedAt: now
      },
      {
        id: taskIds.t3,
        task_number: '2.1',
        associated_wp: workPackageIds.wp2,
        title: 'Literature review',
        task_leader: userIds.bob,
        task_leading_organization: organizationIds.uja,
        createdAt: now,
        updatedAt: now
      },
      {
        id: taskIds.t4,
        task_number: '2.2',
        associated_wp: workPackageIds.wp2,
        title: 'Prototype development',
        task_leader: userIds.charlie,
        task_leading_organization: organizationIds.minoan,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', {
      id: [taskIds.t1, taskIds.t2, taskIds.t3, taskIds.t4]
    }, {});
  }
};
