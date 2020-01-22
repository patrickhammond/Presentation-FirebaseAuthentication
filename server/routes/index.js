var express = require('express');
var router = express.Router();

var admin = require('firebase-admin');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/motd', function (req, res, next) {
  if (req.headers.authorization === undefined) {
    res.send({ motd: 'Hey, stranger!' });
  } else {
    var idToken = req.headers.authorization.replace('Bearer ', '');
    admin.auth().verifyIdToken(idToken)
      .then(function (decodedToken) {
        let uid = decodedToken.uid;
        return admin.auth().getUser(uid);
      })
      .then((function (user) {
        res.send({ motd: 'Hello, ' + user.displayName });
      }))
      .catch(function (error) {
        console.error('Auth error:\n' + JSON.stringify(error));
        res.send({ motd: 'Don\'t trust strangers...' });
        // Handle error
      });
  }
});

module.exports = router;
