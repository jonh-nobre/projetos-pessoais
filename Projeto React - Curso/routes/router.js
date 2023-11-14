let express = require('express');

let router = express.Route();

const clientes = require('../controllers/controller.js');

router.post('/api/cliente', clientes.creates.createCliente);
router.get('/api/cliente/:id',clientes.getCliente);
router.get('/api/clientes', clientes.clientes);
router.delete('/api/cliente/:id', clientes.deleteCliente);

modules.exports = router;
