'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Size.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'productId',
        onDelete: 'CASCADE'
      });
    }
  }
  Size.init({
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    productId: DataTypes.UUID,
    s35: DataTypes.INTEGER,
    s36: DataTypes.INTEGER,
    s37: DataTypes.INTEGER,
    s38: DataTypes.INTEGER,
    s39: DataTypes.INTEGER,
    s40: DataTypes.INTEGER,
    s41: DataTypes.INTEGER,
    s42: DataTypes.INTEGER,
    s43: DataTypes.INTEGER,
    s44: DataTypes.INTEGER,
    s45: DataTypes.INTEGER,
    s46: DataTypes.INTEGER,
    s48: DataTypes.INTEGER,
    s50: DataTypes.INTEGER,
    s52: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Size'
  });
  return Size;
};
