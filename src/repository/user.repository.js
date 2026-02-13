const { User } = require("../db/models");

const createUserRepository = async (user) => {
	console.log("Inside createUserRepository");
	return await User.create(user);
};

const findUserByEmailRepository = async (email) => {
	return await User.findOne({ where: { email } });
};

const getUsersRepository = async () => {
	return await User.findAll();
};

const findUserByIdRepository = async (id) => {
	return await User.findByPk(id);
};

const updateUserRepository = async (id, user) => {
	return await User.update(user, { where: { id } });
};

module.exports = {
	createUserRepository,
	getUsersRepository,
	findUserByEmailRepository,
	findUserByIdRepository,
	updateUserRepository
};
