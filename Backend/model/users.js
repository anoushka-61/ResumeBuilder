const mongoose=require('mongoose');
let user= new mongoose.Schema({
    username:{type:'String',unique:true,required: true},
    email:{type:'String',unique:true,required: true},
    password:{type:'String',required: true, minLength: 8},
})

module.exports=Users=mongoose.model("users",user);