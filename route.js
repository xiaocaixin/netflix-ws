const router = require("express").Router();

const auth_controller = require("./controllers/auth.controller");

router.get("/", (req, res) => {
  res.json({ message: "Hello, World! From route" });
});

router.post("/login", auth_controller.login);
router.post("/logout", auth_controller.logout);
router.post("/signup", auth_controller.signup);
router.post("/verify", auth_controller.verify);

module.exports = router;
