const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongooseConnection = require('./config/mongooseConnection.config');

dotenv.config();

const app = express();

const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

// ==> Retornando a conexão via mongoose via external file usando 'app.set()'
app.set('mongoose connection', mongooseConnection);

app.use(index);
app.use('/api/v1/', userRoutes);

module.exports = app;
