var express = require('express')
var router = express.Router()

router.post('/no-error', function(req, res, next) {
  const respJson = {
    msgCode: "0000",
    msgContent: "SUCCESS",
    result: {
      name: "Your name is Oster"
    }
  }

  setTimeout(() => { res.json(respJson) }, 1200)
})

router.post('/has-error', function(req, res, next) {
  // const respJson = {
  //   msgCode: "0000",
  //   msgContent: "SUCCESS",
  //   result: {}
  // }

  // const respJson = {
  //   msgCode: "M-9801",
  //   msgContent: "Token invalid",
  //   result: {}
  // }

  const respJson = {
    msgCode: "M1114",
    msgContent: "這是一種錯誤訊息",
    result: {}
  }

  // const respJson = {
  //   msgCode: "F-101",
  //   msgContent: "Invalid transfer account number",
  //   result: {}
  // }

  setTimeout(() => { res.json(respJson) }, 1000)
})

module.exports = router;
