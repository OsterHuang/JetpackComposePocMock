const userStore = require('../store/admin-user-store')
const jwdTokenMiddleware = require('../store/jwtTokenMiddleware')

var jwt = require('jsonwebtoken')
var express = require('express')
var router = express.Router()

router.post('/api/account/queryAccountInfo', jwdTokenMiddleware.jwtVerify, function(req, res, next) {

  setTimeout(() => {
    res.json({
      msgCode: "0000",
      msgContent: "SUCCESS",
      result: {
        currentList: [],
        savingsList: [],
        digitalList: [
          {
            branchCode: "KH0800071",
            account: "07110110000023",
            curr: "USD",
            balance: 3000.00,
            nickname: ""
          },
          {
            branchCode: "KH0800081",
            account: "07110110000081",
            curr: "USD",
            balance: 13000.00,
            nickname: " O"
          },
          {
            branchCode: "KH0800071",
            account: "07160110000022",
            curr: "KHR",
            balance: 4000.00,
            nickname: ""
          },
          {
            branchCode: "Oster Branch",
            account: "Oster Account",
            curr: "OST",
            balance: 400000.00,
            nickname: ""
          }
        ],
        "fixedDepositList": []
      }
    })
  }, 800)
})

module.exports = router;
