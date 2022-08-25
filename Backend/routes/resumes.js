let resumes = require('../model/Resumes');
const express =  require('express');

const routers = express.Router();

 routers.post("/Contact",(req,res)=>{
    
    resumes.create(req.body)
    
    .then((resumes)=>res.json(resumes))
            .catch((err)=>res.send(err))   
           
})

routers.post("/getresumedata",(req,res)=>{
    let userid=req.body.userid;
    resumes.findOne({userid:userid})
    .then((resumes)=>res.json(resumes))
            .catch((err)=>res.send(err))  
           
})


routers.post("/UpdateResume",(req,res)=>{
    let userid=req.body.userid;
    resumes.findOneAndUpdate (userid,req.body)
    .then((resumes)=>res.json(resumes))
    .catch((err)=>res.send(err))          
})



module.exports=routers;