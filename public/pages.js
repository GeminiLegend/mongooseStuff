var User = require('./model/userSchema');

var chris = new User({
  name: 'Andrei',
  username: 'BadAssMF',
  password: '1337'
});

chris.save(function (err) {
  if (err) throw err;

  console.log('User saved successfully');
});