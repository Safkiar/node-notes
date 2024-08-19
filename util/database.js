const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Safkiar", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
