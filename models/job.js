'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.User, {foreignKey:'userid'})
    }
  };
  Job.init({
    title: DataTypes.STRING,
    detail: DataTypes.STRING,
    img: DataTypes.STRING,
    userid:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};