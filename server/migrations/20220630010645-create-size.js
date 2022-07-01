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
        unique: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Products',
          key: 'id',
          as: 'product'
        }
      },
      s35: {
        type: Sequelize.INTEGER
      },
      s36: {
        type: Sequelize.INTEGER
      },
      s37: {
        type: Sequelize.INTEGER
      },
      s38: {
        type: Sequelize.INTEGER
      },
      s39: {
        type: Sequelize.INTEGER
      },
      s40: {
        type: Sequelize.INTEGER
      },
      s41: {
        type: Sequelize.INTEGER
      },
      s42: {
        type: Sequelize.INTEGER
      },
      s43: {
        type: Sequelize.INTEGER
      },
      s44: {
        type: Sequelize.INTEGER
      },
      s45: {
        type: Sequelize.INTEGER
      },
      s46: {
        type: Sequelize.INTEGER
      },
      s48: {
        type: Sequelize.INTEGER
      },
      s50: {
        type: Sequelize.INTEGER
      },
      s52: {
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
