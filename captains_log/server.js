const express = require('express');
const app = express();

const captainsLog = require ('./models/captainsLog.js');


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//index route
app.get('/CaptainsLog', (req, res) => {
    res.send(captainsLog); //change to render to format view
    // res.render('Index', { fruits: fruits });
});

app.get('CaptainsLog/New', (req, res)=>{
    res.render('CaptainsLog/New');
    console.log('Make a New Log Form Page')
});


// ...Other code
// ...More code
app.listen(3000, ()=>{
    console.log('listening');
});