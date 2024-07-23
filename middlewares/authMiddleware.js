const { verifyJwt } = require("../services/jwt.service");

const authenticate = async (req, res, next) => {
  if (req.headers.authorization == null) {
    return res.status(401).json({ error: "Token required." });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = verifyJwt(token);
    console.log(decoded);

    // Check if user still exists in Database.
    // throw error if does not exists.

    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid Token." });
  }
};

module.exports = authenticate;
