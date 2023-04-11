const express = require('express');
const app = express();
const port = 3000;

app.get('/greetings', (req, res ) => {
    res.send('Hello, stranger');
});

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name
    res.send('Hello ' + name);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage / 100
    const tipTotal = total * tipPercentage
    res.send('Please leave a tip of ' + tipTotal);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage / 100
    const tipTotal = total * tipPercentage
    res.send('Please leave a tip of ' + tipTotal);
});

app.get('/magic/:question', (req, res) => {
    const question = req.params.question
    const eightBallResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomEightBallResponse = eightBallResponse[Math.floor(Math.random()*eightBallResponse.length)]
    console.log(question, )
    res.send(randomEightBallResponse)
})


app.listen(port, () => {
    console.log('listening on port ' + port)
});


