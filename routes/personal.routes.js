const { Router } = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });

    res.json(user);
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });

    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key];
    });

    await user.save();

    res.json(user);
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
  }
});

module.exports = router;
