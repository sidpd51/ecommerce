const { createUserService, getUsersService } = require("../service/user.service")

const createUserController = async (req, res) => {
    console.log("Inside createUserController")
    const { name, email, password } = req.body
    const result = await createUserService({ name, email, password, role: 'user' })
    if (result === "User already exists") {
        return res.status(400).json({ "message": "User already exists with this email" })
    }
    res.status(201).json({ "message": "User created successfully", result })
}

const getUsersController = async (req, res) => {
    const users = await getUsersService();
    res.status(200).json({ "message": "All users", users })
}


module.exports = {
    createUserController,
    getUsersController
}

// if i want to use await i need to have the method to be async
// async method always return promise so we need to await for that (await keyword is used)