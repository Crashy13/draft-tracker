import mongoose from "mongoose";

const connectFantasyNerdsDB = async () => {
  try {
    await mongoose.connect(process.env.FANTASYNERDS_URI);
    console.log("Connected to FantasyNerdsDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectFantasyNerdsDB;
