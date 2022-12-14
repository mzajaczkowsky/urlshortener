const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database/connect');

app.use(bodyParser.json());

app.use(cors());

app.use('/', apiRouter);
  

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })