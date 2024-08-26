const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBconnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");
const roles = require("./roles");
class users extends Model {}

// users.init initializes the user and it takes two objetcs (attributes and options).
users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    roleId: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: false,
      references: {
        model: roles,
        key: "roleId",
      },
    },
  },
  {
    timestamps: true, //created at,updated at
    paranoid: true, // does not deleted completely
    modelName: "users",
    sequelize,
  }
);

users.beforeCreate(async (user) => {
  user.userId = uuid();
  user.password = await hash(user.password, 10);
});
users.afterCreate(async (user) => {
  delete user.dataValues.password;
});
module.exports = users;