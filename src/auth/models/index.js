'use strict';

// connects to our database depending on the URI set as an environment variable, 
// const DATABASE_URL = "postgres://localhost:5432/mayadahDB";
const { Sequelize, DataTypes } = require('sequelize');
let dataBaseUrl='postgres://localhost:5432/mayadahDB';
let sequelizeOptions = {};
const sequelize = new Sequelize(process.env.DATABASE_URL || dataBaseUrl ,sequelizeOptions);

// our schema definitions
const user = require('./users.model');
const User = user(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  User: User
 
};