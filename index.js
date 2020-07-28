require('dotenv-flow').config();
require('@babel/register');
const server = require('./src/index').default;

exports.graph = server.createHandler();
