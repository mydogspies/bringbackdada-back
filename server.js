const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// const errorHandler = require('./middleware/error');
const db = require('./models');

// load env vars
dotenv.config({path: './config/config.env'});

// connect to db
db.sequelize.sync().then(function() {
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
});

// TODO import routes
// import the routes

// define express app
const app = express();

const corsOptions = {
    origin: 'http://10.110.0.2',
    optionsSuccessStatus: 200
};

// use cors
app.use(cors(corsOptions));

// define body parser
app.use(express.json());

// http logging during development
app.use(morgan('short'));

// TODO add routes
// mount routers

// TODO add error handler
// error handler
// app.use(errorHandler);

// server start
const PORT = process.env.PORT || 5010;
const server = app.listen(
    PORT,
    () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
);

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // close server and exit
    server.close(() => process.exit(1));
})

