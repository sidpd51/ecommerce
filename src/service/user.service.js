const { createUserRepository, getUsersRepository, findUserByEmailRepository, findUserByIdRepository, updateUserRepository, deleteUserRepository } = require('../repository/user.repository')

const createUserService = async (user) => {
    const userExists = await findUserByEmailRepository(user.email)
    if (userExists) {
        return "User already exists"
    }
    return await createUserRepository(user)
}

const getUsersService = async () => {
    return await getUsersRepository()
}

const getUserByIdService = async (id) => {
    const user = await findUserByIdRepository(id)
    if (!user) {
        return "User doesn't exists"
    }
    return user
}

const updateUserService = async (id, user) => {
    const userExists = await findUserByIdRepository(id)
    if (!userExists) {
        return "User doesn't exists"
    }
    const updatedUser = await updateUserRepository(id, user)
    if (updatedUser[0] === 1) return true
    return false
}

const deleteUserService = async (id) => {
    const userExists = await findUserByIdRepository(id)
    if (!userExists) {
        return "User doesn't exists"
    }
    const deletedUser = await deleteUserRepository(id)
    if (deletedUser) return true
    return false
}

module.exports = {
    createUserService,
    getUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService
}