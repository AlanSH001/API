const req = require('express/lib/request');
const res = require('express/lib/response');
const peliculaModel = require('../models/peliculas.model');
const peliculaController = {};


peliculaController.getPeliculas = async (req, res) => {
    const peliculas = await peliculaModel.find();
    res.json(peliculas);
}; 

peliculaController.addPelicula = async (req, res) => {
    const pelicula = new peliculaModel(req.body);
    await pelicula.save();
    res.json({
        'status': 'pelicula guardada correctamente'
    });
};

peliculaController.deletePelicula = async (req, res) => {
    await peliculaModel.findByIdAndDelete(req.params.id);
    res.json({status: "pelicula eliminada"});
}

peliculaController.putPelicula = async (req,res) =>{
    const {id} = req.params;
    const pelicula = {
        brand: req.body.brand,
        name: req.body.name,
        content: req.body.content
    };
    await peliculaModel.findByIdAndUpdate(id, {$set:pelicula}, {new:true});
    res.json({status: 'pelicula actualizada'});
};

module.exports = peliculaController;