'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Post.belongsTo(models.User, {foreignKey:'userid'})
    }
  };
  Post.init({
    title: DataTypes.STRING,
    postbody: DataTypes.STRING,
    like: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};