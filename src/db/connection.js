const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const dbDevRefuelBot = mongoose.connect(MONGO_URI, {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log('Database connection successful');
});

mongoose.connection.on('error', err => {
  console.log(`Database connection error: [${err.message}]`);
  process.exit(1);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Database disconnected`);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Connection for DB disconnected and app terminated');
  process.exit(1);
});

module.exports = dbDevRefuelBot;
