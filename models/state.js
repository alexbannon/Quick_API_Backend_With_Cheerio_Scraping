module.exports = function(sequelize, DataTypes) {
  var model = sequelize.define("state", {
    senators: DataTypes.ARRAY(DataTypes.STRING),
    governor: DataTypes.STRING
  })
  return model;
}
