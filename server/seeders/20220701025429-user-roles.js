'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        id: 1,
        name: 'Client user',
        description: 'Customer of the application',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Admin',
        description: 'Application manager',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
