const express = require('express');
const app = express();
const person = require('./person.js')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));
app.use(function (req, res, next) {
  res.status(404).send("NO DICE!")
})

app.get('/', (request, response) => {

});

app.get('/json', urlLogger, timeLogger, (request, response) => {
  console.log(person)
  response.status(200).json(person);
});



app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
