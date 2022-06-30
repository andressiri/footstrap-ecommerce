'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', [
      {
        name: 'Adidas',
        logo_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/adidas_logo.png',
        country: 'Germany',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Nike',
        logo_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/nike_logo.png',
        country: 'United States',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Puma',
        logo_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/puma_logo.png',
        country: 'Germany',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Reebok',
        logo_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/reebok_logo.png',
        country: 'England',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Converse',
        logo_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/converse_logo.png',
        country: 'United States',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Fila',
        logo_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/fila_logo.png',
        country: 'Italy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
