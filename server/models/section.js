'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  section.init({
    sectionName: DataTypes.TEXT,
    sectionImage: DataTypes.TEXT,
    sectionContent: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'section',
  });
  return section;
};