const { Schema, model } = require('mongoose');

const schema = new Schema({
  secondName: { type: String, required: true },
  firstName: { type: String, required: true },
  patronymic: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model('User', schema);
