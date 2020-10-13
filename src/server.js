const express = require('express');
const path = require('path');

const exphbs = require('express-handlebars');


// iniciar aplicacion
const app = express();


// Configuraciones
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',

}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variables globales


// Rutas
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/proyectos', (req, res) => {
    res.render('projects');
})
app.get('/servicios', (req, res) => {
    res.render('services');
})
app.get('/contacto', (req, res) => {
    res.render('contact');
})

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;