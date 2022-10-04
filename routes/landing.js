const userStore = require('../store/admin-user-store')

var jwt = require('jsonwebtoken')
var express = require('express')
var router = express.Router()

router.post('/api/auth/accessToken', function(req, res, next) {

  const responseJson = (token) => {
    setTimeout(() => {
      console.log("token: ", token)

      res.json({
        msgCode: '0000',
        msgContent: 'SUCCESS',
        result: {
          accessToken: token
        }
      })
    }, 800)
  }

  const token = jwt.sign({ deviceUUID: req.body.deviceUUID }, 'JWT_KEY')
  responseJson(token)
})

router.post('/api/auth/login', function(req, res, next) {
  const userInfo = {
    deviceUUID: req.body.deviceUUID,
    userName: req.body.params.userName,
    isLogin: true
  }
  const token = jwt.sign(userInfo, 'JWT_KEY')

  userStore.addUser({
    userName: userInfo.userName,
    token,
    info: JSON.stringify(userInfo)
  })

  const responseJson = {
    msgCode: '0000',
    msgContent: 'SUCCESS',
    result: {
      accessToken: token,
      createCust: false,
      changeDevice: false
    }
  }

  console.debug("Start handle: " + new Date())
  setTimeout(() => {
    console.debug("Ready to response " + new Date())
    res.json(responseJson)
  }, 1200)
})

router.post('/api/auth/registerDevice', function(req, res, next) {
  res.json({
    msgCode: '0000',
    msgContent: 'SUCCESS',
    result: {}
  })
})

router.post('/api/app/queryVersion', function(req, res, next) {
  res.json({
    msgCode: '0000',
    msgContent: 'SUCCESS',
    result: {
      updateFlag: '0',
      appUrl: 'http://sttp.com'
    }
  })
})

router.post('/api/system/querySystemConfig', function(req, res, next) {
  res.json({
    msgCode: '0000',
    msgContent: 'SUCCESS',
    result: {
      paraList: [
        {
          paraName: "CONTACT_TW",
          paraValue: "https://google.com"
        },
        {
          paraName: "WEB_VIEW_URL",
          paraValue: "https://nbkh.cathaybkdev.com.tw/user/newAppRedirect"
        },
        {
          paraName: "SMS_OTP_SECONDS",
          paraValue: "25"
        },
        {
          paraName: "EMAIL_OTP_SECONDS",
          paraValue: "25"
        },
        {
          paraName: "CONTACT_US",
          paraValue: "https://www.cathaybk.com.kh/index.aspx?view\u003dctctu"
        },
        {
          paraName: "PAAS_API_KEY",
          paraValue: "4c23d40a-3fa3-467e-858c-050be3eaf37d"
        }
      ]
    }
  })
})

router.post('/api/device/bindDeviceStatus', function(req, res, next) {
  res.json({
    msgCode: '0000',
    msgContent: 'SUCCESS',
    result: {
      deviceStatus: false
    }
  })
})

router.post('/api/system/querySystemContent', function(req, res, next) {
  res.json({
    msgCode: '0000',
    msgContent: 'SUCCESS',
    result: {
      content: ''
    }
  })
})



module.exports = router;
