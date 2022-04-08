const express = require('express');
const router = express.Router();

//controladores 
const peliculaController = require('../controllers/peliculas.controller')

router.get('/', peliculaController.getPeliculas);
router.post('/', peliculaController.addPelicula);
router.put('/:id', peliculaController.putPelicula);
router.delete('/:id', peliculaController.deletePelicula);

module.exports = router;