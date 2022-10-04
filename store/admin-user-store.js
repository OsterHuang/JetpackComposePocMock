class AdminUserStore {
  userList = {
    ["Oster test 1"]: { userName: "Oster test 1", token: "Token 1", info: "Decrypt token 1 " },
    ["Oster test 2"]: { userName: "Oster test 2", token: "Token 2", info: "Decrypt token 2 " },
    ["Oster test 3"]: { userName: "Oster test 3", token: "Token 3", info: "Decrypt token 3 " },
    ["Oster test 4"]: { userName: "Oster test 4", token: "Token 4", info: "Decrypt token 4 " },
    ["Oster test 5"]: { userName: "Oster test 5", token: "Token 5", info: "Decrypt token 5 " },
  }

  findUser = (userName) => {
    return this.userList[userName]
  }

  addUser = ({ userName, token, info }) => {
    this.userList[userName] = {
      userName,
      token,
      info
    }
  }

  addUserFake = (userName, token, info) => {
    const no =  Object.keys(this.userList).length + 1
    this.addUser({
      userName: `add user ${no}`,
      token: `add token ${no}`,
      info: `Decrypt token ${no}`
    })
  }

  removeUser = (userName) => {
    if (userName == null || userName.trim().length == 0) return

    delete this.userList[userName]
    // const removeIdx = this.userList.findIndex((usr, idx) => usr.userName === userName)
    // if (removeIdx >= 0) this.userList.splice(removeIdx, 1)
  }
}

const adminUserStore = new AdminUserStore()

module.exports = adminUserStore