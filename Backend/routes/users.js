let users=require('../model/Users');
const express=require('express');
const router=express.Router();


router.get("/getusers",(req,res)=>{
    users.find()
    .then((users)=>res.json(users))
    .catch((err)=>res.send(err))
    console.log("Found");
})

router.post('/login', (req, res) => {
        var res_msg="notok";
      users.findOne({ email: req.body.email, password:req.body.password }, function (err, user) {
       if(user){
           res_msg="loggedin"
           res.send(res_msg);
           
       }
       else{
           res_msg="notok"
           res.send(res_msg);
           
       }
    })
    
});

router.post("/Signup",(req,res)=>{
    users.findOne({ username: req.body.username, password:req.body.password }, function (err, user) {
        if(!user){
            users.create(req.body)
            .then((users)=>res.json(users))
            .catch((err)=>res.send(err))
        }
        else{
            res_msg="exists"
            res.send(res_msg);
           
        }})

        
})
router.delete("/deleteuser",(req,res)=>{
    users.deleteOne({_id:req.body})
    .then((users)=>res.json(users))
    .catch((err)=>res.send(err));
    console.log("Deleted!");
})
router.put("/updateuser",(req,res)=>{
    
    users.findOneAndUpdate({email:req.body.email},{password:req.body.fpassword})
    .then((users)=>res.json(users))
    .catch((err)=>{res.send(err); });
   
})

module.exports=router;