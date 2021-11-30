const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async()=>{
    let query = await Product.find({
        active: true
    });
    return query;
}
exports.getBySlug = async({ slug })=>{
    let data = await Product.findOne({
        slug,
        active: true
    });
    return data;
}
exports.getById = async({ id })=>{
    let data = Product.findById(id);
    return data;
}
exports.getByTags = async({ tag })=>{
    let query = await Product.find({ 
        active: true,
        tags: tag
    });
    return query;
}
exports.create = async({ data })=>{
    let saved = await new Product(data).save();
    return saved;
}
exports.edit = async({ id, data, callback })=>{
    let updated = await Product.updateOne(
        {_id: id },
        { $set: data },
        {},
        callback
    );
    return updated;
}
exports.delete = async({ id, callback })=>{
    let deleted = await Product.deleteOne(
        { _id: id },
        {},
        callback
    );
    return deleted;
}