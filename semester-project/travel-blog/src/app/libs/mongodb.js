import mongoose from "mongoose";

// Define a function to connect to MongoDB
const connectMongoDB = async () => {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect('mongodb+srv://tester:PnIHQ4w2D1VuwvzM@cluster0.jhdtehd.mongodb.net/');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongoDB;
