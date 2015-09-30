module.exports = function(sequelize, DataTypes) {
  var model = sequelize.define("state", {
    name: DataTypes.STRING,
    senator_one: DataTypes.STRING,
    senator_two: DataTypes.STRING,
    governor: DataTypes.STRING
  })
  return model;
}
