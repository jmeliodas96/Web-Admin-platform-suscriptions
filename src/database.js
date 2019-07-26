// connector
const mongoose = require('mongoose');

// connections by promise then -> catch
mongoose.connect('mongodb://localhost/don-bosco-db',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));




