var Nodetime = Meteor.npmRequire('nodetime');

Nodetime.profile({
  accountKey: process.env.NODETIME_ACCOUNT_KEY
});

Npm.require('fs');