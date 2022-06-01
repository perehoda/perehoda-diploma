const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  userID: { type: Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  articul: { type: String, required: true, unique: true },
  measure: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
});

module.exports = model('Product', schema);
