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
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res.status(422).json({ msg: 'User already exists' })
      }

      user = new User({ name, email, password })

    } catch (err) {

    }

    res.send('passed')
  }
)

module.exports = router
