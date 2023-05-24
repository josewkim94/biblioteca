const express = require('express');
const session = require('express-session');
const path = require('path');
const viewsDirectory = path.join(__dirname, '../views'); // Update the path to views directory
const styleDirectory = path.join(__dirname, '../style'); // Update the path to style directory
const User = require('../models/user');
const Category = require('../models/category');
const Book = require('../models/book');

const controller = {
  registerPage : (req,res)=>{
    res.sendFile(path.join(viewsDirectory, 'register.html'))
  },
  index: async (req, res) => {
    console.log('index');
    res.render('index.ejs', { user: req.session.user });
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

      req.session.user = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
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
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
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
        req.session
        console.log("usuario criado");
        res.redirect('/'); // Redirect to a success page or another route
      })
      .catch((error) => {
        // Error occurred while creating the user
        res.send('Error creating user: ' + error.message);
      });
    },
    redirectRegisterBook: async (req, res) => {
      const categories = await Category.findAll();
      // console.log(categories);
      res.render(path.join(viewsDirectory, 'registerBook.ejs'), { categories });
    },
    registerBook: async (req,res)=>{
      const { title, author,categoryId} = req.body;
      try {
        // Create the book in the database
        const book = await Book.create({
          title,
          author,
          categoryId,
        });
    
       console.log(categoryId)
        res.redirect('/registerBook'); // Redirect to a success page or another route
      } catch (error) {
        console.error('Error creating book:', error);
        res.send('An error occurred while registering the book');
      }
    }
  }




module.exports = controller;