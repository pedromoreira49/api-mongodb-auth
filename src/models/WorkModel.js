import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true,
  },
  equip: {
    type: String,
    required:true
  },
});

const Work = mongoose.model('Work', WorkSchema);

export default Work;