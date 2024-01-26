// Load environment variables first
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// require('dotenv').config();

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });

// // Models
// require('./Category');
// require('./Recipe');
