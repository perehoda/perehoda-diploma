const { Router } = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/', auth, async (req, res) => {
  try {
    const { articul, amount } = req.body;

    const requiredProduct = await Product.findOne({ articul });

    if (requiredProduct.amount >= amount) {
      requiredProduct.amount -= amount;

      await Product.findOneAndUpdate({ articul }, { amount: requiredProduct.amount })
    } else {
      res.status(500).json({ message: 'Требуемое кол-во превышает имеющееся!' });
    }

    res.status(201).json({ requiredProduct });
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
  }
});

module.exports = router;
