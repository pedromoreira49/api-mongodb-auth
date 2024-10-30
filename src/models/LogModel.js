import mongoose from "mongoose";
import UserSchema from "./UserModel.js";

const LogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  action: {
    type: String,
    required:true
  },
  resource: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true,
  }
});

const Log = mongoose.model('Log', LogSchema);

export default Log;