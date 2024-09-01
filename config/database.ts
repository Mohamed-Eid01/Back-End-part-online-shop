import mongoose from "mongoose";

const database = () => {
  mongoose.connect(process.env.BASE_URL!).then(() => {
    console.log(`Database connected to : ${process.env.BASE_URL}`);
  });
};

export default database;
