const mongoose = require('mongoose');

const connection_url = process.env.DATABASE_URL;

const connectDB = connection_url =>
  mongoose
    .connect(connection_url, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database Connected');
    })
    .catch(err => {
      console.log('Database not connected' + err);
    });

module.exports = connectDB;
