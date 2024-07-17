const router = require("express").Router();

const auth_controller = require("../controllers/auth.controller");
const auth_middleware = require("../middlewares/authMiddleware");

router.get("/", auth_middleware, (req, res) => {
  res.json({ message: "Hello, World! From route" });
});

router.post("/verify", auth_middleware, auth_controller.verify);
router.post("/logout", auth_middleware, auth_controller.logout);

module.exports = router;
