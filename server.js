const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./src/config/db');
    userRoutes = require('./src/app/serviceroutes/user.route');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
      
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/users', userRoutes);
    const port = process.env.PORT || 4001;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });