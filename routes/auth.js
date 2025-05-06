const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('phone').notEmpty(),
  body('password').isLength({ min: 6 })
], authController.register);

router.post('/login', [
  body('email').isEmail(),
  body('password').exists()
], authController.login);

module.exports = router;
