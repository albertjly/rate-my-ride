const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Sick!',
    user_id: 1,
    car_id: 2
  },
  {
    comment_text: 'Cool car, my guy!',
    user_id: 6,
    car_id: 1
  },
  {
    comment_text: 'Looks nice!',
    user_id: 1,
    car_id: 2
  },
  {
    comment_text: 'It needs some better rims in my opinion',
    user_id: 3,
    car_id: 2
  },
  {
    comment_text: 'Needs to be lower! good ride!',
    user_id: 5,
    car_id: 1
  },
  {
    comment_text: 'Dope!',
    user_id: 8,
    car_id: 3
  },
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;