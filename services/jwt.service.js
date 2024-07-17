const jwt = require("jsonwebtoken");

const expiry = "1h";

exports.signJwt = (u, p) => {
  return jwt.sign({ username: u, password: p }, process.env.SECRET_KEY, {
    expiresIn: expiry,
  });
};

exports.verifyJwt = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
