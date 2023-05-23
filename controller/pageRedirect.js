const path = require('path');
const viewsDirectory = path.join(__dirname, '../views'); // Update the path to views directory
const styleDirectory = path.join(__dirname, '../style'); // Update the path to style directory
const User = require('../models/user');


const controller = {
  registerPage : (req,res)=>{
    res.sendFile(path.join(viewsDirectory, 'register.html'))
  },
  loginPage : (req,res)=>{
    res.sendFile(path.join(viewsDirectory, 'login.html'))
  },
  login : async (req,res)=>{
    const {email, password} = req.body;
    try {
      // Find the user in the database
      const user = await User.findOne({ where: { email,password } });

      if (!user) {
        // User not found
        res.send('Invalid username or password');
        return;
      }

     
      console.log('usuario logado',user.email, user.password);
      // Successful login
      // Set up session or token here
      // Redirect to the desired page
      res.redirect('/');
    } catch (error) {
      // Error occurred while performing login
      res.send('Error during login: ' + error.message);
    }
  },
  createUser: async (req,res)=>{
    const { firstName, lastName, email, password } = req.body;

    // Create a new user in the database
    User.create({
      firstName,
      lastName,
      email,
      password
    })
      .then(() => {
        // User created successfully
        console.log("usuario criado");
        res.redirect('/'); // Redirect to a success page or another route
      })
      .catch((error) => {
        // Error occurred while creating the user
        res.send('Error creating user: ' + error.message);
      });
    }
  }




module.exports = controller;