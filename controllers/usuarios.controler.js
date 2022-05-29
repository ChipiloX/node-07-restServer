const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        ok: true,
        msg: 'GET API - Controlador',
        query
    })
};


const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.status(400).json({
        ok: true,
        msg: ' put API Controller',
        id
    })
};


const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'post API controller',
        nombre,
        edad
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API controller'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}