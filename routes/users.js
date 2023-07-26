const Router = require('express');
const {  getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/users');
const routes = Router();


routes.get('/', getUsuarios)

routes.post('/', postUsuarios)

routes.put('/:id', putUsuarios)

routes.delete('/:id', deleteUsuarios)

module.exports = routes;