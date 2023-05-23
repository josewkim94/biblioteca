const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bibliotecaRouter = require('./routes/biblioteca');
const adminRouter = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));

// Define the directories for static files
app.use('/', bibliotecaRouter);
// app.use('/admin', adminRouter);
// app.use(bibliotecaRouter)
// app.use(adminRouter)
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});