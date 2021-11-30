const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.create = async({ data })=>{
    let saved = await new Order(data).save();
    return saved;
}