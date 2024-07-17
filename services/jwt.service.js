const jwt = require("jsonwebtoken");

exports.signJwt = (u, p) => {
  return jwt.sign({ username: u, password: p }, "MySecretKey", {
    expiresIn: "1h",
  });
};

exports.verifyJwt = (token) => {
    return jwt.verify(token, "MySecretKey");
}
