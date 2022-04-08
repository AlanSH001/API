const mongoose = require('mongoose');
const { Schema } = mongoose;

const PeliculaSchema = new Schema({
    nombre: {type: String, required: true},
    año: {type: int, required: true},
    genero: {type: String, required:true},
    clasificacion: {type: String, required: true}
});

module.exports = mongoose.model('pelicula', PeliculaSchema)