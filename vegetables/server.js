const express = require('express');
const app = express();
const port = 3000;

const fruits = require ('./models/vegetables.js');

//view engine (HTML)
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//middleware goes at the top of server.js it runs for every route
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})
//middleware that decodes the body of text to be used in post route
app.use(express.urlencoded({extended:false})); 

// moved fruits array to Models/fruit.js

//index route
app.get('/vegetables', (req, res) => {
    //res.send(fruits); change to render to format view
    res.render('Index', { vegetables: vegetables });
});

//creat route - new fruit
app.get('/vegetables/new', (req,res) => {
    res.render('New');   
})
//create Route
app.post('/vegetables', (req, res) =>{
    console.log(req.body);
    if(req.body.readToEat == 'on'){
        req.body.readyToEat = true;
    } else{
            req.body.readyToEat = false;
        }
    fruits.push({...req.body});
    res.redirect('/vegetables');
}) 
//show route
app.get('/fruits/:indexOfVegetablesArray', function(req, res){
     //res.send(fruits[req.params.indexOfFruitsArray]); changed to a render
    res.render('Show', { //second param must be an object
        vegetables: vegetables[req.params.indexOfVegetablesArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});    

app.listen(port, () => {
    console.log('listening on port ' + port)
});
