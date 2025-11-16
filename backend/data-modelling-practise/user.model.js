import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
       username:{
        type: String,
        required: true,
        unique: true
       },
       email: {
         type: String,
         required: true,
         unique: true,
         lowercse: true,
       },
       password: {
        type: String,
        required: [true, "password is required"]
       }

    } , {timestamps : true}
)

export const User = mongoose.model("User", userSchema)