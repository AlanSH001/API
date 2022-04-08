const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//const port = process.env.PORT || 3000;

app.set('port', process.env.PORT || 3000);
const {mongoose} = require('./database');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: '*'}));

//Routes
app.use('/myApi/pelicula',require('./routes/pelicula.routes'));

//Server
app.listen(app.get('port'), () => {
    console.log('Servidor inicializado en puerto: ' + app.get('port') /*port*/);
});