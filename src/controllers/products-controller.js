const repository = require('../repositories/product-repository');

exports.get = async(req,res,next)=>{
    try{
        let query = await repository.get();
        res.status(500).send(query);
    } catch(err){
        res.status(400).send({
            message: 'Ocorreu um erro ao consultar o banco de dados',
            data: err
        });
    }
}
exports.getBySlug = async(req,res,next)=>{
    const { slug } = req.params;

    try{
        let query = await repository.getBySlug({slug})
        res.status(500).send(query);   
    } catch(err){
        res.status(400).send({
            message: 'Ocorreu um erro ao consultar o banco de dados',
            data: err
        });
    }
}
exports.getByTags = async(req,res,next)=>{
    const { tag } = req.params;

    try{
        let query = await repository.getByTags({ tag });
        res.status(500).send(query);
    } catch(err){
        res.status(400).send({
            message: 'Ocorreu um erro ao consultar o banco de dados',
            data: err
        });
    }
}
exports.getById = async(req,res,next)=>{
    const { id } = req.params;
    try{
        let query = await repository.getById({ id });
        res.status(500).send(query);
    } catch(err){
        res.status(400).send({
            message: 'Ocorreu um erro ao consultar o banco de dados',
            data: err
        });
    }
}
exports.create = async(req,res,next)=>{
    try{
        await repository.create({ data: req.body });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch(err){
        res.status(400).send({
            message: 'Ocorreu um erro ao cadastrar o produto!',
            data: err
        });
    }
};
exports.edit = async(req, res, next)=>{
    const { id } = req.params;
    
    await repository.edit({ id, data: req.body, callback: (err, response)=>{
        if(err) return res.status(400).send({ message: 'Ocorreu um erro ao atualizar o banco de dados!', data: err });

        res.status(200).send({ status: 'success', data: response });
    }});
};
exports.delete = async(req, res, next)=>{
    const { id } = req.params;

    await repository.delete({ id, callback: err=>{
        if(err) return res.status(400).send({ message: 'Ocorreu um erro ao atualizar o banco de dados!', data: err });

        res.status(200).send({
            status: 'success'
        });
    }});
}
