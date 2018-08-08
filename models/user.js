'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    googleid: DataTypes.STRING
  }, {});
  user.associate = function(models) {
models.user.hasMany(models.maingoal);
  };
  return user;
};
