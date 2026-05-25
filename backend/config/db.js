import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://moubhattacharjeek99_db_user:0MUAisxF0w5GXgEb@cluster0.zanvv8c.mongodb.net/TaskManagement')
    .then(() => console.log('DB CONNECTED'))
}