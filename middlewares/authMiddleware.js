const { verifyJwt } = require("../services/jwt.service");

const authenticate = async (req, res, next) => {
  if (req.headers.authorization == null) {
    return res.status(401).json({ error: "Token required." });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = verifyJwt(token);
    console.log(decoded);
    // req.user = await getUserFromDatabase(decoded.userId);
    // if user does not exists, throw error. else next().
    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid Token." });
  }
};

module.exports = authenticate;
