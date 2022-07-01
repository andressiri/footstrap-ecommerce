'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Product.hasOne(models.Size, {
        as: 'stock',
        foreignKey: 'productId'
      });
      Product.belongsTo(models.Brand, {
        as: 'brand',
        foreignKey: 'brandId'
      });
    }
  }
  Product.init({
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.REAL,
    brandId: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product'
  });
  return Product;
};
