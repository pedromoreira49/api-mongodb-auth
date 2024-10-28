import bcrypt from 'bcrypt'
import { loginService, generateToken, createService } from '../services/AuthService.js'

export const login = async (req, res) => {
    try{
        const { email, password } = req.body

        const user = await loginService(email)

        if(!user){
            return res.status(404).send({
                message: "User or password not found!"
            })
        }

        const passwordIsValid = await bcrypt.compare(password, user.password)

        if(!passwordIsValid){
            return res.status(404).send({
                message: "User or password not found!"
            })
        }
        
        const token = generateToken(user.id)

        res.status(200).send({token})
    } catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const register = async (req, res) => {
  try{
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).send({
            message: "Submit all fields for registration!"
        });
    }

    const user = await createService(req.body)

    if(!user){
        return res.status(400).send({
            message: "Error creating User"
        })
    }

    res.status(201).send({
      message: "User created successfully",
    })
  }catch (err) {
    res.status(500).send({
      message: err.message
    })
  }

}