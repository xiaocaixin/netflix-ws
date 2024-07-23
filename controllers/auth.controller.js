const asyncHandler = require("express-async-handler");

const { signup, login } = require("../services/auth.service");
const { verifyJwt } = require("../services/jwt.service");

exports.signup = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await signup(email, password);
    res.status(200).json({ message: "Signup OK!" });
  } catch (e) {
    res.status(400).json({ message: `Signup failed... ${e}` });
  }
});

exports.login = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const jwt = await login(email, password);
    res.status(200).json({ success: true, message: "Login OK!", token: jwt });
  } catch (e) {
    res.status(400).json({ success: false, message: `Login failed... ${e}` });
  }
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Login");
});

exports.verify = asyncHandler(async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = verifyJwt(token);
    res.status(200).json({ success: true, email: decoded.email });
  } catch (e) {
    res.status(400).json({ success: false, email: "" });
  }
});
