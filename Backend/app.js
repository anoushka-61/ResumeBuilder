let express=require('express');
let fileUpload=require('express-fileupload');
let resume=require('./model/Resumes');
let app=express();
let cors=require('cors');
let router=require('./routes/users');
let routers = require('./routes/resumes')
let connectDB = require('./config/db');
let bodyparser=require('body-parser');
app.use(fileUpload());
app.use(cors({origin:true,credentials:true}));
let port=8000;
app.get("/",(req,res)=>res.send("Test API"));
app.post('/upload',function(req,res){
    let file;
    let uploadPath;
    file=req.files.file;
    uploadPath=__dirname+'/userimages/'+file.name;

    file.mv(uploadPath,function(err){
        if(err)
        return res.send(500).send(err);
        else{
            let id=file.name.split(".")[0];
            console.log(file.name.split('.'));
            resume.findOneAndUpdate ({_id:id},{image:true})
            .then((resumes)=>res.send('fileupload'))
            .catch((err)=>res.send(err)) 
            
        }
        
    })
    
})
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use("/api",router);
app.use("/api",routers);
app.use("/images",express.static(__dirname + "/userimages"));

connectDB();
app.listen(port,()=>console.log("Server Started on port:8000"));