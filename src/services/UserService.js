import User from '../models/UserModel.js'

export const createUserService = (body) => User.create(body);

export const findByIdService = (id) => User.findById(id);