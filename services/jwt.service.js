const jwt = require("jsonwebtoken");

const expiry = "1h";

exports.signJwt = (e, p) => {
  return jwt.sign({ email: e, password: p }, process.env.SECRET_KEY, {
    expiresIn: expiry,
  });
};

exports.verifyJwt = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
