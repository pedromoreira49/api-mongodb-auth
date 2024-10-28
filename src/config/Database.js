import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI).then(() => console.log("database connected!"));
}

export default connect;