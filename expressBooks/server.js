require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;

//setting the view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//mongoose connection stuff
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
db.on('error', err => console.log(err.message + ' is mongo not running?'));
db.on('open', () => console.log('mongo connected: '));
db.on('close', () => console.log('mongo disconnected!'));

//middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}))


const bookController = require('./controllers/books')
app.use('/books', bookController)


//listen
app.listen(3000, () => {
    console.log('Listening on port 3000');
})
