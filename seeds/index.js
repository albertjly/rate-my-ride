const userSeeds = require('./user-seeds');
const carSeeds = require('./car-seeds');
const commentSeeds = require('./comment-seeds');

const sequelize = require('../config/connection');

const fertilize = async () => {
  await sequelize.sync({ force: true });
  console.log('-------------');
  await userSeeds();
  console.log('-------------');
  await carSeeds();
  console.log('-------------');
  await commentSeeds();
  console.log('-------------');

  process.exit(0);
};

fertilize();