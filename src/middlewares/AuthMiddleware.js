import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { findByIdService } from '../services/UserService.js'

dotenv.config()

export const authMiddleware = (req, res, next) => {
    try{
        const {authorization} = req.headers

        if(!authorization){
            return res.status(401).send({
                message: "Sem header authorization!"
            })
        }
    
        const parts = authorization.split(" ")
    
        if(parts.length !== 2){
            return res.status(401).send({
                message: "Não Autorizado pós split!"
            })
        }
    
        const [schema, token] = parts
    
        if(schema !== "Bearer"){
            return res.status(401).send({
                message: "Não é Bearer!"
            })
        }
    
        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if(err){
                return res.status(401).send({
                    message: "Token Invalido mesmo!"
                })
            }

            const user = await findByIdService(decoded.id)

            if(!user || !user.id){
                return res.status(404).send({
                    message: "user not found!"
                })
            }

            req.userId = user._id
            next()
        })
    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}