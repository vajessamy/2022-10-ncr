const express = require('express');
const app = express();
const port = 3000;

const pokemon = require ('./models/pokemon.js');

//view engine (HTML)
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


//index route
 app.get('/pokemon', (req, res) => {
  // res.send(pokemon);
    res.render('Index', { pokemon: pokemon });
});

app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
});


// show route
app.get('/pokemon/:id', function(req, res){
//    res.send(pokemon[req.params.id]); 
   res.render('Show', { //second param must be an object
        pokemon: pokemon[req.params.id] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});    

app.listen(port, () => {
    console.log('listening on port ' + port)
});
