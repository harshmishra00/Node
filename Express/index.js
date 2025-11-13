const express =require('express')
const path =require('path')
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.get('/profile/:user', function(req,res){
    res.send(req.params.user);
})

app.listen(3000,function(){
    console.log("Running at port 3000")
})