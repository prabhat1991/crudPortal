const express = require('express');
const app = express();
const userRoute = express.Router();

let User = require("../../../models/UserModel");

// Defined Register route
userRoute.route('/register/:email').post(function (req, res) {
User.find({ 'email': req.params.email }, function (err, user) {
    if (!user) {
      user = new User(req.body);
      user.active = true;
      user.save()
        .then(game => {
          res.status(200).json({'newUser': 'User Registered Successfully'});
        }).catch(err => {
          res.status(400).send("Unable to Register");
        });
    }
    else{
      console.log('user exit')
      res.status(200).json({'newUser': 'User already exists!!!'});
    }
  });
});

module.exports = userRoute;
