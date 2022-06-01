const { Router } = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.get('/', auth, async (req, res) => {
  try {
    const products = await Product.find({ userID: req.user.userId });

    res.json(products);
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
  }
});

module.exports = router;
