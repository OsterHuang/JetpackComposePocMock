const jwt = require('jsonwebtoken')

const createError = require('http-errors');
const userStore = require('../store/admin-user-store')

const jwdTokenMiddleware = {
  jwtVerify: (req, res, next) => {
    const token = req.header("Authorization")
  
    if (!token || token.trim().length == 0) {
      next(createError(401, "M-9801"));
      return
    }

    try {
      const decodeInfo = jwt.decode(token)
      if ((decodeInfo && decodeInfo.isLogin) == true) {
        userStore.addUser({
          userName: decodeInfo.userName,
          token: token,
          info: JSON.stringify(decodeInfo)
        })
        next()
        return
      }

      if (userStore.findUser(decodeInfo.userName)) next()
      else next(createError(401, "M-9803"))
    } catch(e) {
      next(createError(401, "M-9802"));
    }
    
  }
}

module.exports = jwdTokenMiddleware
