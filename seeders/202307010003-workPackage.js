'use strict';

const { workPackageIds, userIds, organizationIds } = require('./seedData');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('WorkPackages', [
      {
        id: workPackageIds.wp1,
        wp_number: 1,
        wp_title: 'Project Management',
        wp_leader: userIds.alice,
        wp_leading_organization: organizationIds.zsi,
        createdAt: now,
        updatedAt: now
      },
      {
        id: workPackageIds.wp2,
        wp_number: 2,
        wp_title: 'Scientific Research',
        wp_leader: userIds.bob,
        wp_leading_organization: organizationIds.uja,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorkPackages', {
      id: [workPackageIds.wp1, workPackageIds.wp2]
    }, {});
  }
};
