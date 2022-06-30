'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Sizes', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUID
      },
      productId: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true
      },
      35: {
        type: Sequelize.INTEGER
      },
      36: {
        type: Sequelize.INTEGER
      },
      37: {
        type: Sequelize.INTEGER
      },
      38: {
        type: Sequelize.INTEGER
      },
      39: {
        type: Sequelize.INTEGER
      },
      40: {
        type: Sequelize.INTEGER
      },
      41: {
        type: Sequelize.INTEGER
      },
      42: {
        type: Sequelize.INTEGER
      },
      43: {
        type: Sequelize.INTEGER
      },
      44: {
        type: Sequelize.INTEGER
      },
      45: {
        type: Sequelize.INTEGER
      },
      46: {
        type: Sequelize.INTEGER
      },
      48: {
        type: Sequelize.INTEGER
      },
      50: {
        type: Sequelize.INTEGER
      },
      52: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Sizes');
  }
};
