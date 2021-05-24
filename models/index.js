const User = require('./User');
const Car = require('./Car');
const Comment = require('./Comment');

/****************/
/* Associations */
/****************/

// User and Car

User.hasMany(Car, {
  foreignKey: 'user_id'
});

Car.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Car, {
  foreignKey: 'car_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Car.hasMany(Comment, {
  foreignKey: 'car_id'
});

module.exports = { User, Car, Comment };