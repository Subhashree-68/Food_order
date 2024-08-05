import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://subhashreeb514:Sonu%402003@cluster0.2nb9q9c.mongodb.net/food-del').then(()=>console.log('db connected'))
}