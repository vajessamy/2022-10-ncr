const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

 const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});


//mongoose connection stuff
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// db.on('error', err => console.log(err.message + ' is mongo not running?'));
// db.on('open', () => console.log('mongo connected: '));
// db.on('close', () => console.log('mongo disconnected!'));

// db.on('connected', () => {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// });