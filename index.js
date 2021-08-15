'use strict';
require('dotenv').config();

const server = require('./src/server');
const {db} = require('./src/auth/models/index'); //destructuring es6
// first connect to my Database then start my server

db.sync().then(()=> {
    server.start(process.env.PORT|| 3000);
})
.catch(console.error);