const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check')

const User = require('../../../models/User')

// @route   POST  api/v1/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Password must contains minimun 6 characters').isLength({ min: 6 })
  ],
  (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  res.send('passed')
})

module.exports = router
