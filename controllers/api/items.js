

const Item = require('../../models/item');


module.exports = {
index,
show,
create,
delete: deleteOne,
update
}

async function index(req, res) {
  const items = await Item.find({});
  res.status(200).json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id)
  res.status(200).json(item);
}

async function create(req, res) {
  // req.body.user = req.user._id
  const item = await Item.create(req.body)
  res.status(201).json(item);
}

async function deleteOne(req, res) {
  const deletedItem = await Item.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedItem);
}

async function update(req, res) {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedItem)
}