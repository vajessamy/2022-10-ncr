require('dotenv').config
const express = require('express');
const app = express();
const port = 3000;

const fruits = require ('./models/fruits.js');
const vegetables = require ('./models/vegetables.js');

const mongoose = require('mongoose')

//view engine (HTML)
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//middleware goes at the top of server.js it runs for every route
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})



//middleware that decodes the body of text to be used in post route
// app.use(express.urlencoded({extended:false}));
app.use(express.urlencoded({extended:true}));

// moved fruits array to Models/fruit.js

//index route
app.get('/fruits', (req, res) => {
    //res.send(fruits); change to render to format view
    res.render('Index', { fruits: fruits });
});

app.get('fruits/vegetables', (req, res) => {
    //res.send(fruits); change to render to format view
    res.render('vegetable/Index', { vegetables: vegetables });
});


//creat route - new fruit
app.get('/fruits/new', (req,res) => {
    res.render('New');   
})

app.get('/fruits/vegetables/new', (req,res) => {
    res.render('vegetables/New');   
})

//create Route
app.post('/fruits', (req, res) =>{
    console.log(req.body);
    if(req.body.readToEat == 'on'){
        req.body.readyToEat = true;
    } else{
            req.body.readyToEat = false;
        }
    fruits.push({...req.body});
    res.redirect('/fruits');
}) 

//create Route
app.post('/fruits/vegetables', (req, res) =>{
    console.log(req.body);
    if(req.body.readToEat == 'on'){
        req.body.readyToEat = true;
    } else{
            req.body.readyToEat = false;
        }
    vegetables.push({...req.body});
    res.redirect('/fruits/vegetables');
}) 


//show route
app.get('/fruits/:indexOfFruitsArray', function(req, res){
     //res.send(fruits[req.params.indexOfFruitsArray]); changed to a render
    res.render('Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});    

app.get('/fruits/vegetables/:id', function(req, res){
    res.render('vegetables/Show', { //second param must be an object
       vegetable: vegetables[req.params.id] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
   });
});   

const userController = require(./controllers?users)



app.listen(port, () => {
    console.log('listening on port ' + port)
});
