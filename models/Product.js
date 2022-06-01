const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  userID: { type: Types.ObjectId, ref: 'User' },
  name: { type: String },
  articul: { type: String, required: true, unique: true },
  measure: { type: String },
  price: { type: Number },
  amount: { type: Number, required: true },
});

module.exports = model('Product', schema);
