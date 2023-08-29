const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const registerRoute = require('./routes/register.js');

const app = express();
const port = 5000;
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',registerRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});