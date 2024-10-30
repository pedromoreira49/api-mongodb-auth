import {createWorkService} from "../services/WorkService.js"
import { saveLog } from "./LogController.js";

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
    saveLog(Date.now(), req.userId,'create', 'works', {customer, number, equip});
    res.status(201).send({
      message: "Work created successfully",
    })
  }catch (err) {
    res.status(500).send({
      message: err.message
    })
  }

}