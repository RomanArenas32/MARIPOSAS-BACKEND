const { response } = require('express');


const getUsuarios = (req, res = response) => {
    res.status(200).json({
        msg: 'Peticion GET realizada con exito!'
    })
}
const postUsuarios = async(req, res = response) => {

    const usuario = req.body
    res.status(200).json({
        msg: 'Peticion POST realizada con exito!',
    })
}
const putUsuarios = (req, res = response) => {
    res.status(200).json({
        msg: 'Peticion PUT realizada con exito!'
    })
}
const deleteUsuarios = (req, res = response) => {
    res.status(200).json({
        msg: 'Peticion DELETE realizada con exito!'
    })
}

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}