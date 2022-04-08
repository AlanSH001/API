const mongoose = require('mongoose');
const URL = "mongodb+srv://User:@cluster0.psjpx.mongodb.net/Cluster0";

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conexion exitosa a BD'))
.catch(err => console.log('Tienes un error: ' + err));

module.exports = mongoose;