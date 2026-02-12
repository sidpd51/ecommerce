const { createUserRepository, getUsersRepository } = require('../repository/user.repository')

const createUserService = (user) => {
    console.log("Inside createUserService")
    return createUserRepository(user)
}

const getUsersService = () => {
    return getUsersRepository()
}

module.exports = {
    createUserService,
    getUsersService
}