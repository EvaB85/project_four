'use strict';
module.exports = (sequelize, DataTypes) => {
  var maingoal = sequelize.define('maingoal', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    freqrate: DataTypes.INTEGER,
    freqmeasure: DataTypes.STRING,
    freqtime: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  maingoal.associate = function(models) {
    models.maingoal.belongsTo(models.user);
    models.maingoal.hasMany(models.subgoal);
  };
  return maingoal;
};
