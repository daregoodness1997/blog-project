const User = require('../models/User');
const Post = require('../models/Post');
const Category = require('../models/Category');
const bcrypt = require('bcrypt');

// Register User
const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPawword = await bcrypt.hash(password, salt);
  try {
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPawword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Login User

const loginUser = async (req, res) => {
  //   const { username, password, email } = req.body;

  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('Wrong credentials');

    // validate password
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json('Wrong credentials');

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update User

const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can update only your account!');
  }
};

const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json('User not found');
    }
  } else {
    res.status(401).json('You can only delete your account');
  }
};

// Get User
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(404).json('User not found');
  }
};

// Submit a Post
const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a Post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(404).json('You can update only your post');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a Post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.deleteMany();
        res.status(200).json('Post has been deleted...');
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(404).json('You can delete only your post');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
// Get Post

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json('There are no posts here');
  }
};

// Get all Post
const getPosts = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      post = await Post.find({ username: username });
    } else if (catName) {
      post = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      post = await Post.find();
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json('There are no posts here');
  }
};

// Create Category
const createCatgory = async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Categories
const getCatgories = async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  createPost,
  updateUser,
  deleteUser,
  getUser,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  createCatgory,
  getCatgories,
};
