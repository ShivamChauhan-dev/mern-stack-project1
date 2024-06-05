const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller")
const signupSchema = require("../validator/auth-validator")
const loginSchema = require("../validator/auth-validator")
const validate = require("../middleware/validate-middleware");
const User = require("../models/user-model");
const authMiddleware = require("../middleware/auth-middleware")
router
    .route("/")
    .get(authcontrollers.home);
router
    .route("/register")
    .post(validate(signupSchema), authcontrollers.register);
router
    .route("/login")
    .post(validate(loginSchema), authcontrollers.login);

router.route("/user").get(authMiddleware,authcontrollers.user);

module.exports = router;