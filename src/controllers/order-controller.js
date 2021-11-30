const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.create = async(req,res,next)=>{
    let data = req.body;
    data.number = guid.raw().substr(0, 6);
    
    console.log('UID Gerada: ', data.number);
    try{
        await repository.create({ data });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch(err){
        res.status(400).send({
            message: 'Ocorreu um erro ao cadastrar a pedido!',
            data: err
        });
    }
};