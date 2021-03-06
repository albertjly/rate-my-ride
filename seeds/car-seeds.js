const { Car } = require('../models');

const carData = [
  {
    image_url: 'https://i.imgur.com/R4ipDfl.jpg',
    make: 'Mazda',
    model: 'Miata',
    year: 1995,
    color: 'Red',
    description: 'This is my project miata! It spends more time broken in the garage than driving on the road!',
    user_id: 5
  },
  {
    image_url: 'https://i.imgur.com/RBpEKE7.jpg',
    make: 'Fiat',
    model: 'Abarth 500',
    year: 2016,
    color: 'grey',
    description: "Here's my personal Fiat 500 Abarth. It may be small, but it's crazy fun to drive",
    user_id: 3
  },
  {
    image_url: 'https://i.imgur.com/ecOLqbA.jpg',
    make: 'Hyundia',
    model: 'Veloster N',
    year: 2020,
    color: 'blue',
    description: 'This car is super fun to throw around on the mountain roads. And the N stands for FAST!',
    user_id: 2
  },
  {
    image_url: 'https://i.imgur.com/sMXlppB.jpg',
    make: 'Volkswagen',
    model: 'GTI',
    year: 2017,
    color: 'red',
    description: "This is my 2017 GTI Sport. It isn't much, but it's mine.",
    user_id: 8
  },
  {
    image_url: 'https://i.imgur.com/F5GcMVi.jpg',
    make: 'Mazda',
    model: 'RX-7',
    year: 1993,
    color: 'blue',
    description: "Here's to blown apex seals and spinny doritos! Gotta hit the touge whenever it's actually running",
    user_id: 1
  },
  {
    image_url: 'https://i.imgur.com/KmKvprJ.jpg',
    make: 'Volkswagen',
    model: 'beetle',
    year: 1966,
    color: 'seafoam green',
    description: 'This will forever be my project',
    user_id: 6
  }
];

const carSeeds = () => Car.bulkCreate(carData);

module.exports = carSeeds;