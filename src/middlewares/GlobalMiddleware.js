import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

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

      const role = decoded.role;
      
      if (role !== "admin") {
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
