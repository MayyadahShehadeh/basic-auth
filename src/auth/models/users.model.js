'use strict';

// Create a Sequelize model
const UserSchema = (sequelize, DataTypes) =>
sequelize.define('lab06-User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });





module.exports= UserSchema;