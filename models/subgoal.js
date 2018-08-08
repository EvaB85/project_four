'use strict';
module.exports = (sequelize, DataTypes) => {
  var subgoal = sequelize.define('subgoal', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    freqrate: DataTypes.INTEGER,
    freqmeasure: DataTypes.STRING,
    freqtime: DataTypes.STRING,
    maingoalId: DataTypes.INTEGER
  }, {});
  subgoal.associate = function(models) {
    models.subgoal.belongsTo(models.maingoal);
  };
  return subgoal;
};
