const User = require("../model/User");
const bcrypt = require("bcrypt");

require("dotenv").config();
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  console.log(req.body);

  console.log(req.files?.length ? req.files[0].path : null);

  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const image = req.files?.length ? req.files[0].path : null;

    const userExists = await User.findOne({ where: { username: username } });
    if (userExists) {
    return res.json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: newpassword,
      image,
    });
  return  res.status(201).json({ success: true, newUser: newUser });
  } catch (error) {
  return  res.status(400).json({ error: error });
  }
};

const updateduser = async (req, res) => {
  const userid = req.params.id;
  console.log(userid);

  const image = req.files?.length ? req.files[0].path : null;

  try {

    const isExist = await User.findByPk(userid);
    if (!isExist) {
      return res.status(404).json({ error: "User not found" });
    }
    const { username, email, password } = req.body;
    const updatedUser = await User.update(
      { username, email, password, image },
      { where: { id: userid } }
    );
    res.json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  console.log(req.headers.authorization);
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteuser = async (req, res) => {
  const userid = req.params.id;
  console.log(userid);
  try {
    const isExist = await User.findByPk(userid);
    if (!isExist) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await User.destroy({ where: { id: userid } });
    res.json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findByPk = async (req, res) => {
  const userid = req.params.id;

  try {
    const user = await User.findByPk(userid);
    if (userexit) {
      res.json({ userExits });
    } else {
      res.json({ message: "User not found! " });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role:user.role },
      process.env.JWT_TOKEN,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful!",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};


const updateUserByself = async (req, res) => {
  
}


module.exports = {
  createUser,
  updateduser,
  getAllUsers,
  deleteuser,
  findByPk,
  findUserById,
  loginUser,
};
