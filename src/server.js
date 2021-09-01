'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const basicAuth = require('./auth/middlewares/basicAuth');
const {User}= require('./auth/models/index');
// Prepare the express app
const app = express();


// Process JSON input and put the data on req.body
app.use(express.json());



// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
// const Users = require('../src/models/index');




app.post('/signup', async (req, res,next) => {
  console.log("inside signup !!! ");
  console.log({body: req.body})
  try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      console.log("req.body.password :", req.body.password)
       const record = await User.create({
          username : req.body.username,
          password: req.body.password
      });
      console.log("record >>>>> ", record)
      res.json(record);
  } catch (e) {
      console.log(e);
      next('invalid')
      // res.status(500).json({err: 'invalid'})
  }

});



app.post('/signin', basicAuth, (req, res) => {
  console.log('req.user',req.user);
  res.status(200).send({username: req.username ,id :req.user.id});
});




// make sure our tables are created, start up the HTTP server.
// sequelize.sync().then(() => {
//     app.listen(3000, () => console.log('server up'));
//   }).catch(e => {
//     console.error('Could not start server', e.message);
//   });

function start(port) {
  app.listen(port, ()=> console.log(`Running on Port ${port}`))
}
module.exports = {
  app: app,
  start: start
}