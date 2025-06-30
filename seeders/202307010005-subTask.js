'use strict';

const { subTaskIds, taskIds, workPackageIds, userIds, organizationIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('SubTasks', [
      {
        id: subTaskIds.st1,
        associated_workpackage: workPackageIds.wp1,
        associated_task: taskIds.t1,
        sub_task_number: '1.1.1',
        title: 'Create project handbook',
        sub_task_leader: userIds.alice,
        sub_task_leading_organization: organizationIds.zsi,
        createdAt: now,
        updatedAt: now
      },
      {
        id: subTaskIds.st2,
        associated_workpackage: workPackageIds.wp1,
        associated_task: taskIds.t2,
        sub_task_number: '1.2.1',
        title: 'Organize kickoff meeting',
        sub_task_leader: userIds.david,
        sub_task_leading_organization: organizationIds.zsi,
        createdAt: now,
        updatedAt: now
      },
      {
        id: subTaskIds.st3,
        associated_workpackage: workPackageIds.wp2,
        associated_task: taskIds.t3,
        sub_task_number: '2.1.1',
        title: 'Collect publications',
        sub_task_leader: userIds.bob,
        sub_task_leading_organization: organizationIds.uja,
        createdAt: now,
        updatedAt: now
      },
      {
        id: subTaskIds.st4,
        associated_workpackage: workPackageIds.wp2,
        associated_task: taskIds.t3,
        sub_task_number: '2.1.2',
        title: 'Analyze gaps',
        sub_task_leader: userIds.eva,
        sub_task_leading_organization: organizationIds.uja,
        createdAt: now,
        updatedAt: now
      },
      {
        id: subTaskIds.st5,
        associated_workpackage: workPackageIds.wp2,
        associated_task: taskIds.t4,
        sub_task_number: '2.2.1',
        title: 'Develop prototype',
        sub_task_leader: userIds.charlie,
        sub_task_leading_organization: organizationIds.minoan,
        createdAt: now,
        updatedAt: now
      },
      {
        id: subTaskIds.st6,
        associated_workpackage: workPackageIds.wp2,
        associated_task: taskIds.t4,
        sub_task_number: '2.2.2',
        title: 'Prototype testing',
        sub_task_leader: userIds.charlie,
        sub_task_leading_organization: organizationIds.minoan,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SubTasks', {
      id: [
        subTaskIds.st1,
        subTaskIds.st2,
        subTaskIds.st3,
        subTaskIds.st4,
        subTaskIds.st5,
        subTaskIds.st6
      ]
    }, {});
  }
};
