import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI);
}

export default connect;