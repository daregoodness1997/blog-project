const User = require('../models/User');
const Post = require('../models/Post');

// Register User
const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Login User

const loginUser = async (req, res) => {};

// Submit a Post
const postBlog = async (req, res) => {};

module.exports = { registerUser, loginUser, postBlog };
