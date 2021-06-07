'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userpagefollow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userpagefollow.init({
    userId: DataTypes.INTEGER,
    pageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userpagefollow',
  });
  return userpagefollow;
};
