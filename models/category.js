const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize('biblioteca', 'postgres', 'batata', {
  host: 'localhost',
  dialect: 'postgres',
});

const Category = sequelize.define('category', 
{
  bookCategory: {
    type: DataTypes.STRING,
  }

}
)
module.exports = Category;