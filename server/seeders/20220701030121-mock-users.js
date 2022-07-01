'use strict';
const { v4: UUIDV4 } = require('uuid');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync();
const hashedPassword = bcrypt.hashSync('123456', salt);

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: UUIDV4(),
        name: 'Admin',
        email: 'admin@test.com',
        password: hashedPassword,
        verified: true,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Manager',
        email: 'admin@mail.com',
        password: hashedPassword,
        verified: true,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Fake User',
        email: 'fakeuser@mail.com',
        password: hashedPassword,
        verified: true,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Test User',
        email: 'user@test.com',
        password: hashedPassword,
        verified: true,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Not Verified',
        email: 'notverified@mail.com',
        password: hashedPassword,
        verified: true,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Lack Verification',
        email: 'notverified@test.com',
        password: hashedPassword,
        verified: null,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
