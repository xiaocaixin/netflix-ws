const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  if (req.authorization == null) {
    return res.status(401).json({ error: "Token required." });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    // const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const decoded = jwt.verify(token, "MySecretKey");
    console.log("decoded!");
    console.log(decoded);
    // req.user = await getUserFromDatabase(decoded.userId);
    // if user does not exists, throw error. else next().
    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;
