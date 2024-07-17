const asyncHandler = require("express-async-handler");

const { signup, login } = require("../services/auth.service");
const { verifyJwt } = require("../services/jwt.service");

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
    const jwt = await login(username, password);
    res.status(200).json({ message: "Login OK!", jwt: jwt });
  } catch (e) {
    res.status(400).json({ message: `Login failed... ${e}` });
  }
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Login");
});

exports.verify = asyncHandler(async (req, res, next) => {
  // const { jwt } = req.body;
  const jwt = req.headers.authorization.split(" ")[1];
  try {
    verifyJwt(jwt);
    res.status(200).json({ message: "Verify OK!" });
  } catch (e) {
    res.status(400).json({ message: `Verify failed... ${e}` });
  }
});
