const repository = require('../repositories/customer-repository');

exports.create = async(req,res,next)=>{
    try{
        await repository.create({ data: req.body });
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch(err){
        res.status(400).send({
            message: 'Ocorreu um erro ao cadastrar o cliente!',
            data: err
        });
    }
};