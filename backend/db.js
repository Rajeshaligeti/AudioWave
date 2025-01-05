import mongoose from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/";

mongoose.connect(MONGO_URI).then(console.log("Connected to database"))