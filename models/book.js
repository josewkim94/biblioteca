const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const Category = require('./category');
const sequelize = new Sequelize('biblioteca', 'postgres', 'batata', {
  host: 'localhost',
  dialect: 'postgres',
});

const Book = sequelize.define('book',
{
  title: 
  { 
    type : DataTypes.STRING,
    allowNull:false
  },
  author:
  {
    type : DataTypes.STRING,
    allowNull:false
  },
  id:
  {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
  },
  

    

    
  
});
Book.belongsTo(Category);
module.exports = Book;