const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Sick!',
    user_id: 1,
    car_id: 2
  },
  {
    comment_text: 'Cool car, my guy!',
    user_id: 4,
    car_id: 1
  },
  {
    comment_text: 'Looks nice!',
    user_id: 2,
    car_id: 2
  },
  {
    comment_text: 'It needs some better rims in my opinion',
    user_id: 8,
    car_id: 2
  },
  {
    comment_text: 'Needs to be lower! good ride!',
    user_id: 6,
    car_id: 1
  },
  {
    comment_text: 'Dope!',
    user_id: 8,
    car_id: 3
  },
  {
    comment_text: 'Awesome man!',
    user_id: 9,
    car_id: 3
  },
  {
    comment_text: 'I love a good hatchback!',
    user_id: 4,
    car_id: 4
  },
  {
    comment_text: 'I have the same one in silver, great car!',
    user_id: 7,
    car_id: 4
  }
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;