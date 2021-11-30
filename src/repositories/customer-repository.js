const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async()=>{
    let query = await Customer.find({});
    return query;
}
exports.create = async({ data })=>{
    let saved = await new Customer(data).save();
    return saved;
}