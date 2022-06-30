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
        foreignKey: 'id',
        onDelete: 'CASCADE'
      });
    }
  }
  Size.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    productId: DataTypes.UUID,
    35: DataTypes.INTEGER,
    36: DataTypes.INTEGER,
    37: DataTypes.INTEGER,
    38: DataTypes.INTEGER,
    39: DataTypes.INTEGER,
    40: DataTypes.INTEGER,
    41: DataTypes.INTEGER,
    42: DataTypes.INTEGER,
    43: DataTypes.INTEGER,
    44: DataTypes.INTEGER,
    45: DataTypes.INTEGER,
    46: DataTypes.INTEGER,
    48: DataTypes.INTEGER,
    50: DataTypes.INTEGER,
    52: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Size'
  });
  return Size;
};
