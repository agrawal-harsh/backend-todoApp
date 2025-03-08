const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todos api
const todoRoutes = require('./routes/todos');

//mount the todo api routes
app.use('/api/v1', todoRoutes);

//start server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

//connect to the database
const dbConnect = require('./config/database');
dbConnect();

//default route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the todo api</h1>');
});