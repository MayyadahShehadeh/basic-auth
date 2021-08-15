'use strict';


const express = require('express');
const router = express.Router();
const basicAuth = require('./middlewares/basicAuth')
const {User} = require('./models/users.model');

router.post('/signup', signUp);

async function signUp (req,res){
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await User.create(req.body);
        res.status(200).json(record);
      } catch (e) { res.status(403).send("Error Creating User"); }
}

router.post('/signin', basicAuth, (req,res) => {
  try {

      res.status(200).json(User);

  } catch (error) { res.status(403).send(error); 
  console.log(error);}
});


module.exports= router;