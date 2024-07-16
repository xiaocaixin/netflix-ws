const asyncHandler = require("express-async-handler");

const { signup } = require("../services/auth.service");

exports.signup = asyncHandler(async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await signup(username, password);
    res.send("Signup success!");
  } catch (e) {
    res.send(`Signup failed... ${e}`);
  }
});

exports.login = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Login");
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Login");
});
