var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///morning_consult_test");
var State = sequelize.import("../models/state");

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    State: State
  }
}
