const { Router } = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/', auth, async (req, res) => {
  try {
    const { name, articul, measure, price, amount } = req.body;

    if (name) {
      const product = new Product({
        userID: req.user.userId, name, articul, measure, price, amount
      });
 
      await product.save();
  
      res.status(201).json({ product });
    } else {
      const requiredProduct = await Product.findOne({ articul });

      requiredProduct.amount += Number(amount);

      await Product.findOneAndUpdate({ articul }, { amount: requiredProduct.amount });

      res.status(201).json({ requiredProduct });
    }
  } catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
  }
});

module.exports = router;
