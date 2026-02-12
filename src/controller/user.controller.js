const { createUserService } = require("../service/user.service")

const createUserController = (req, res) => {
    console.log("Inside createUserController")
    const { name, email, password } = req.body
    const user = { name, email, password, role: 'user' }
    const result = createUserService(user)
    res.status(201).json({ "message": "User created successfully", result })
}

const getUsersController = (req, res) => {
    res.status(501).json({ "message": "All users" })
}


module.exports = {
    createUserController,
    getUsersController
}