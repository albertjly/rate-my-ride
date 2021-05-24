const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'Jimmy',
    email: 'jimmy@gmail.com',
    password: 'password123'
  },
  {
    username: 'Dave',
    email: 'dave@aol.com',
    password: 'password123'
  },
  {
    username: 'Sarah',
    email: 'sarah@aol.com',
    password: 'password123'
  },
  {
    username: 'Justin',
    email: 'justin@msn.com',
    password: 'password123'
  },
  {
    username: 'Jessica',
    email: 'jessica@gmail.com',
    password: 'password123'
  },
  {
    username: 'Jeff',
    email: 'jeff@jeff.com',
    password: 'password123'
  },
  {
    username: 'Fred',
    email: 'fred@mysteryinc.com',
    password: 'password123'
  },
  {
    username: 'Scooby',
    email: 'scooby@dooby.doo',
    password: 'password123'
  },
  {
    username: 'Bart',
    email: 'bart@aol.com',
    password: 'password123'
  },
  {
    username: 'Frank',
    email: 'frank@msn.com',
    password: 'password123'
  }
];

const userSeeds = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeeds;