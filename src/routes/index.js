const express = require('express');
const router = express.Router();

const get = router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: 'Primeira API',
        version: '1.0.0'
    });
});

module.exports = router;