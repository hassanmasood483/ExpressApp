const sequelize = require("../bin/DBconnection");
const users = require("./definitions/users");
const roles = require("./definitions/roles");
const models = { users, roles };
const db = {};
db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
