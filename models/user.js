const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize('biblioteca', 'postgres', 'batata', {
  host: 'localhost',
  dialect: 'postgres',
});
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  _id: {
    type: DataTypes.INTEGER ,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    isEmail: true
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      len: [6,20]
    }
    

  } 
  
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); 

module.exports = User;

