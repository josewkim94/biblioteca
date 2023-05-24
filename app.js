const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bibliotecaRouter = require('./routes/biblioteca');
const adminRouter = require('./routes/admin');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'index.css')));
app.use(express.static(path.join(__dirname, 'style')));

// app.use((req, res, next) => {
//   if (req.accepts('html')) {
//     res.setHeader('Content-Type', 'text/ejs');
//   }
//   next();
// });

app.use(session({
  secret:'secret',
  resave: false,
  saveUninitialized:true
}))
// Define the directories for static files
app.use('/', bibliotecaRouter);
// app.use('/admin', adminRouter);
// app.use(bibliotecaRouter)
// app.use(adminRouter)
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});