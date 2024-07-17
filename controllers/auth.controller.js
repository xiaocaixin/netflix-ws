const asyncHandler = require("express-async-handler");

const { signup, login } = require("../services/auth.service");

exports.signup = asyncHandler(async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await signup(username, password);
    res.status(200).json({ message: "Signup OK!" });
  } catch (e) {
    res.status(400).json({ message: `Signup failed... ${e}` });
  }
});

exports.login = asyncHandler(async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await login(username, password);
    res.status(200).json({ message: "Login OK!" });
  } catch (e) {
    res.status(400).json({ message: `Login failed... ${e}` });
  }
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Login");
});
