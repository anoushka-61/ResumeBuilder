let mongoose=require('mongoose');
let config=require('config');
let db=config.get("mongoURI");

const connectDB=async()=>
{
    try{
    await mongoose.connect(db,{useNewUrlParser:true});
    console.log("connected");
}

catch(err){
    console.log(err.message);
}

}

module.exports=connectDB;