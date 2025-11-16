const express =require('express')
const fs=require("fs");
const app=express();

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    fs.readdir('./files',function(err, files){
        res.render("index", {files:files});
    })
    
})

app.post("/create",function(req,res){
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, function(err){
        res.redirect("/")
    });
    
})

app.get("/file/:filename",function(req,res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, fileData){
        res.render("show", {filename: req.params.filename , fileData: fileData});
    })
})

app.get("/file/delete/:filename",function(req,res){
    fs.unlink(`./files/${req.params.filename}`, function(err){
        res.redirect("/");
    })
})

app.listen(3000, function(){
    console.log("Running");
})