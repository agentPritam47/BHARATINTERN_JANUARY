const mongoose=require("mongoose");

const phoneSchema =new mongoose.Schema({
    Firstname: {
        type:String,
        required:true
    },

    Lastname: {
        type:String,
        required:true
    },

    Email: {
        type:String,
        required:true,
        unique:true
    },

    password: {
        type:String,
        required:true
    }
})

const Login = new mongoose.model("Login",phoneSchema);
module.exports = Login;