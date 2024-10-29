import {createWorkService} from "../services/WorkService.js"

export const createWork = async (req, res) => {
  try{
    const { customer, number, equip } = req.body;

    if(!customer || !number || !equip){
        return res.status(400).send({
            message: "Submit all fields for registration!"
        });
    }

    const work = await createWorkService(req.body)

    if(!work){
        return res.status(400).send({
            message: "Error creating Work"
        })
    }

    res.status(201).send({
      message: "Work created successfully",
    })
  }catch (err) {
    res.status(500).send({
      message: err.message
    })
  }

}