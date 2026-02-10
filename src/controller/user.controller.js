const createUserController = (req, res) => {
    res.status(501).json({ "message": "User created successfully" })
}

const getUsersController = (req, res) => {
    res.status(501).json({ "message": "All users" })
}


module.exports = {
    createUserController,
    getUsersController
}