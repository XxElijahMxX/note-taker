const express = require('express');
const noteRouter = require('./notes');
const app = express();

Router.use('/notes', noteRouter);
module.exports = app;