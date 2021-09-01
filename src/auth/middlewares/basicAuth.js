'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {User} = require('../models/index');
  
module.exports = async (req,res,next)=>{

        if (req.headers['authorization']) {
          let basicHeaderParts = req.headers.authorization.split(' '); // ['Basic', encoded(username:password)]
          let encoded = basicHeaderParts.pop();
          let decoded = base64.decode(encoded); // username:password
          let [username, password] = decoded.split(":"); // rawan test@1234
        
         try {
             const user = await User.findOne({ where: {username: username} });
             const valid = await bcrypt.compare(password, user.password);
              if (valid) {
                res.status(200).json({username: username, id: user.id})

                  next();
              } else {

                  next('Invalid UserName and Password')
              }
         } catch(e) {
          next('error in signin');
      
         }
      }
      
    }
    
  