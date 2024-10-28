import User from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

export const loginService = (email) => User.findOne({email: email}).select("+password")

export const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400})

export const createService = (body) => User.create(body);