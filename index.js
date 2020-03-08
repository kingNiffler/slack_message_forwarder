const express = require('express');
const config = require('config');
const constants = require('./constants/constants');
const routes = require('./routes');

const port = config.get(constants.PORT);

const app = express();
app.use(constants.baseUrl, routes);



console.log('Server listening on ' + port)
app.listen(port);

