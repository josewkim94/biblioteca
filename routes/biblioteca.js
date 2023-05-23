const express = require('express');
const router = express.Router();
const path = require('path');
const viewsDirectory = path.join(__dirname, '../views'); // Update the path to views directory
const styleDirectory = path.join(__dirname, '../style'); // Update the path to style directory
const controller = require('../controller/pageRedirect');


// Serve static files
router.use('/style', express.static(styleDirectory));

// Route handler for the root URL
router.get('/', (req, res) => {
  console.log("router / get")
  res.sendFile(path.join(viewsDirectory, 'index.html'));
});
router.get('/register', controller.registerPage);
router.post('/register', controller.createUser);
router.get('/login', controller.loginPage);
router.post('/login', controller.login);
module.exports = router;
