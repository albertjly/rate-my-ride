const { Car } = require('../models');

const carData = [
  {
    make: 'Volkswagen',
    model: 'LT 40',
    year: 1978,
    color: 'custom',
    description: 'This is my custom Mystery Machine that I drive around in with the gang solving mysteries of course!',
    user_id: 7
  },
  {
    make: 'Mazda',
    model: 'Miata',
    year: 1995,
    color: 'Red',
    description: 'This is my project miata! It spends more time broken in the garage than driving on the road!',
    user_id: 5
  },
  {
    make: 'Fiat',
    model: 'Abarth 500',
    year: 2016,
    color: 'grey',
    description: "Here's my personal Fiat 500 Abarth. It may be small, but it's crazy fun to drive",
    user_id: 3
  }
];

const carSeeds = () => Car.bulkCreate(carData);

module.exports = carSeeds;