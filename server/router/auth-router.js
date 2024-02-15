const express = require("express");
const router = express.Router();
const authcontroler = require("../controllers/auth-controller")
const signupSchema = require("../validator/auth-validator")
const loginSchema = require("../validator/auth-validator")
const validate = require("../middleware/validate-middleware")

router
    .route("/")
    .get(authcontroler.home);
router
    .route("/register")
    .post(validate(signupSchema), authcontroler.register);
router
    .route("/login")
    .post(validate(loginSchema), authcontroler.login);

module.exports = router;