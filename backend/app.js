const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const authRouter = require('./routes/auth');

dotenv.config();
const port = process.env.PORT || 8080;
const connection_url = process.env.DATABASE_URL;

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'OK',
    data: [1, 2, 3, 4, 5],
  });
});

// Connect to Server and Database
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server started at ${port}...`);
    });
    await connectDB(connection_url);
  } catch (err) {
    console.log(err);
  }
};
start();
