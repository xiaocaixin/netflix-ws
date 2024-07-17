const router = require("express").Router();
const auth_controller = require("../controllers/auth.controller");

router.post("/login", auth_controller.login);
router.post("/signup", auth_controller.signup);

module.exports = router;
