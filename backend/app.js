const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const categoriesRouter = require('./routes/categories');
const multer = require('multer');

dotenv.config();
const port = process.env.PORT || 8080;
const connection_url = process.env.DATABASE_URL;

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, 'hello.jpeg');
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/categories', categoriesRouter);

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
