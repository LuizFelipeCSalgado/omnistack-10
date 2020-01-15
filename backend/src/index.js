const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
app.use(express.json());
const PORT = 3333;

const connectionString = 'mongodb://127.0.0.1/27017';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(routes);

app.listen(PORT);
console.log('\u001b[32mServer successfuly built!\u001b[0m');
console.log(`Listening on \u001b[35mhttp://localhost/${PORT}\u001b[0m`);
