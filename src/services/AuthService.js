import User from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

export const loginService = (email) => User.findOne({email: email}).select("+password")

export const generateToken = (id, role, name) => jwt.sign({id: id, role: role, name: name}, process.env.SECRET_JWT, {expiresIn: 86400})
