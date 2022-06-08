const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    
    const { q, nombre = 'noname', apikey, page = 1, limit} = req.query;
    
    res.status(400).json({
        msg: 'get api',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPut = (req = request, res = response) => {
    
    const id = req.params.id;
    
    res.status(400).json({
        msg: 'put api',
        id
    })
}

const usuariosPost = (req = request, res = response) => {
    
    const {nombre, edad} = req.body;
    
    res.status(201).json({
        msg: 'post api',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete api'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}