import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { permissions } from '../security/Security.js'

dotenv.config()

export const isAdmin = (req, res, next) => {
  try {
    const {authorization} = req.headers
    const parts = authorization.split(" ")

    jwt.verify(parts[1], process.env.SECRET_JWT, async (err, decoded) => {
      if(err){
          return res.status(401).send({
              message: "Token Invalido mesmo!"
          })
      }
      
      if (decoded.role !== "Admin") {
        return res.status(401).send({
          message: "Need more privileges!"
        })
      }

      next()
  })

  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

export const hasPermission = (resource, action) => {
  return (req, res, next) => {
    try {
      const {authorization} = req.headers;
      const parts = authorization.split(" ");
  
      jwt.verify(parts[1], process.env.SECRET_JWT, async (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Invalid Token!"
          })
        }
  
        const role = decoded.role;
        const rolePermissions = permissions[role];

        if (!rolePermissions || !rolePermissions[resource]?.includes(action)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        req.userId = decoded.id;
        next();
      })
    } catch (err) {
      res.status(500).send({
        message: err.message
      })
    }
  }
}
