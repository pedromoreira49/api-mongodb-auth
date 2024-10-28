import {createUserService} from "../services/UserService.js"

export const createUser = async (req, res) => {
  try{
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).send({
            message: "Submit all fields for registration!"
        });
    }

    const user = await createUserService(req.body)

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