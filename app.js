const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const viewsDirectory = path.join(__dirname, 'views');
const styleDirectory = path.join(__dirname, 'style');

const bibliotecaRouter = require('./routes/biblioteca');
const adminRouter = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(viewsDirectory));
app.use('/style', express.static(styleDirectory));

// Define the directories for static files
// app.use('/', bibliotecaRouter);
// app.use('/admin', adminRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});