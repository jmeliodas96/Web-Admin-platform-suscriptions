// Dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Initializations
const app = express();

// Settings
    // local and cloud
app.set('port', process.env.PORT || 3000);
    // path views concatenate to src > src/views
app.set('views', path.join(__dirname, 'views'));
    // handlebars > engine template
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
    // tell to app the engine template
app.set('view engine', '.hbs');

// Middlewares 
    // receive only data
app.use(express.urlencoded({extended:false}));
    // forms can request put and delete
app.use(methodOverride('_method'));
    // management session
app.use(session({
    secret:'secretbosco',
    resave:true,
    saveUninitialized:true
}));
 
// Global variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/products'));
app.use(require('./routes/notes'));

// Static files

// Server is listening
app.listen(app.get('port'), () => {
    console.log('App listening in port', app.get('port'));
});

