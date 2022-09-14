const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/database');

dotenv.config({ path: './config/config.env' });

connectDB();

const movements = require('./routes/movement');

const app = express();

app.use(express.json());


app.use('/movements', movements);


const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`.yellow.bold));