const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBconnection");
const users = require("./users");

class sessions extends Model {}

// users.init initializes the user and it takes two objetcs (attributes and options).
sessions.init(
  {
    sessionId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING(),
      reference: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    timestamps: true,
    modelName: "sessions",
    sequelize,
  }
);
module.exports = sessions;
//   unique: true,
