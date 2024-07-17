const jwt = require("jsonwebtoken");

const expiry = "1h";

exports.signJwt = (u, p) => {
  return jwt.sign({ username: u, password: p }, "MySecretKey", {
    expiresIn: expiry,
  });
};

exports.verifyJwt = (token) => {
  return jwt.verify(token, "MySecretKey");
};
