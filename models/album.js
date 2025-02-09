'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  album.init({
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    record_label: DataTypes.STRING,
    artwork_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'album',
  });
  return album;
};