const userStore = require("../../store/admin-user-store")

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin-user', {
    users: userStore.userList
  });
});

router.post('/list', function(req, res, next) {
  res.json({
    users: userStore.userList
  })
})

router.post('/add', function(req, res, next) {
  userStore.addUserFake()

  res.render('admin-user', {
    users: userStore.userList
  });
});

router.post('/delete', function(req, res, next) {
  userStore.removeUser(req.body.userName)

  res.render('admin-user', {
    users: userStore.userList
  });
});

module.exports = router;
