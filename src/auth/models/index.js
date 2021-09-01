'use strict';

// connects to our database depending on the URI set as an environment variable, 
const { Sequelize, DataTypes } = require('sequelize');
let dataBaseUrl='postgres://localhost:5432/mayadahDB';
const sequelize = new Sequelize(dataBaseUrl ,{});

// our schema definitions
const user = require('./users.model');
const User = user(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  User: User
 
};