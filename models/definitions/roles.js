const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBconnection");

class roles extends Model {}

// users.init initializes the user and it takes two objetcs (attributes and options).
roles.init(
  {
    roleId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["Instructor", "Admin", "Trainee"],
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "roles",
    sequelize,
  }
);
module.exports = roles;
