var express=require('express');
var app=express();
var mysql=require('mysql');
var cors=require('cors');
var bodyparser=require('body-parser');

var path=require('path');
var code = 200;
var fs = require('fs');
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'portal'
    }
);
connection.connect(function(err){
    if(err)
        {
            console.log('error');
        }
        else{
            console.log('connected');
        }
});
app.use(cors());  //add middlewere
//app.use(bodyparser.json());//bodyparser
app.use(bodyparser.json({  
    limit: '50mb'  
}));  
app.use(bodyparser.urlencoded({  
    limit: '50mb',  
    extended: false  
})); 
app.use(express.static('public'))




app.post('/upload',(req,res,next)=>{

    const newRecord={
        token_id: req.body.token_id,
        email_id: req.body.nickname+'@gmail.com',
        name: req.body.name,
        picture: req.body.picture,
      }
     connection.query('select *from users where user_email="'+newRecord.email_id+'"',function(error,rows,fields){
                if(!!error)
                    {
                        console.log('error in db');
                    }
                    else{
                        if(rows.length<=0)
                            {
                                var sql = 'INSERT INTO users (token_id,user_name,user_email,picture) VALUES ("'+req.body.token_id+'","'+req.body.name+'","'+newRecord.email_id+'","'+req.body.picture+'")';
                                console.log(sql);
                                connection.query(sql, function (err, result) {
                                    if (err) 
                                        {throw err;
                                        }
                                        else{
                                            console.log("1 record inserted");
                                            res.json({ msg: 'sucess'});
                                        }
                            
                                  });
                            }
                            else{

                            }
                            
                         }
                         
            });


    
});
app.post('/admin_login',(req,res,next)=>{
    
        const admin_user={
            user_id: req.body.user_name,
            password: req.body.password
          }
         connection.query('select *from users where user_name="'+admin_user.user_id+'" and token_id="'+admin_user.password+'"',function(error,rows,fields){
                    if(!!error)
                        {
                            console.log('error in db');
                        }
                        else{
                            if(rows.length>0)
                                {
                                    res.send(admin_user);
                                }
                                else{
                                res.send('error');
                                }
                                
                             }
                             
                });
        
    });
    app.get('/userlist',(req,res,next)=>{
        connection.query("select *from users",function(error,rows,fields){
            if(!!error)
                {
                    console.log('error in db');
                }
                else{
                    res.json(rows);            
                }
        }); 
     });
     app.get('/imglist',(req,res,next)=>{
        connection.query("select *from records",function(error,rows,fields){
            if(!!error)
                {
                    console.log('error in db');
                }
                else{
                    res.json(rows);            
                }
        }); 
     });



app.post('/saveImageByEmail',(req,res,next)=>{
    var model =  req.body.model;
    var dt = new Date();
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
    for (var i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));  
    var base64d = model.client_img.replace(/^data:image\/png;base64,/, "");  
    var path = "./public/images/" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";  
    var pathSub = "/images/" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";  
    fs.writeFile(path, base64d, 'base64', function(err) {  
        if (err) {  
            return console.log(err);  
        }  
        console.log("The file was saved!");  
    });  
    var sql = 'INSERT INTO records (uploaded_by, img_des, img) VALUES ("'+model.email+'","'+model.description+'","'+ pathSub+'")';
                        
    connection.query(sql, function (err, result) {
        if (err) throw err;     
        else res.json({status: "staus", code: code});
      });
    });




app.listen(3000);