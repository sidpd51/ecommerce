const express = require('express')
const { getUsersController, createUserController } = require('../../controller/user.controller')
const userRouter = express.Router()

userRouter.get('/', getUsersController)
userRouter.post('/', createUserController)


module.exports = userRouter