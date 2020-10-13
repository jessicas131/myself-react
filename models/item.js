var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
    type: String
  },
  quantity: {
    type: Number,
    min: 0,
  },
  retailPrice: {
    type: Number,
    min: 0,
  },
  sku: {
    type: String
  },
  supplier: {
    type: String
  },
  description: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }}, {
    timestamps: true
  });

module.exports = mongoose.model('Item', itemSchema);