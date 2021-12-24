const express = require('express');
const cors = require("cors");
const app=express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())
const bcrypt = require("bcrypt");


var sql = require("mssql");
// var request = new sql.Request();
// config for your database
var config = {
    user: 'sarah',
    password: 'sarahfatima99',
    server: 'DESKTOP-MFGD6N8', 
    database: 'Hyperian',
   

    options:{
        trustServerCertificate: true,
        trustedConnection:false,
        enableArithAbort: true

    },
    port:1433

};

sql.connect(config, function (err) {
     if (err) console.log(err);
    console.log("connected") 
}); 


app.get("/",(req,res)=>{
    
  
    res.send("My api");

})

app.post("/register",(req,res)=>{
    ;
    // console.log(req.body);
    bcrypt.hash(req.body.password, 10).then((hash)=>{
        var request = new sql.Request()
        const name=req.body.name
        const email=req.body.email
        const password=hash
        request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${email}'`, function (err, recordset)
        { console.log(recordset);
            if (recordset['recordset'][0]){
                res.send({message:"user already registered"})
            }
            else{
                request.query(`INSERT INTO [Hyperian].[dbo].[Users] VALUES ('${name}', '${email}','${password}')`, function (err, recordset) {
            
                    if (err) console.log(err)
        
                   
                    res.send({message:"user registered"})
                    
                });
          
            }
        })
    
})
})


app.post("/login",(req,res)=>{
    var request = new sql.Request();
    const {
        email,
        password
    }=req.body
    console.log(email)
    request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${email}'`, function (err, recordset){
      
        if(recordset['recordset'][0]){


            bcrypt.compare(password, recordset['recordset'][0].Password, (err, results) => {
                if (err)
                    throw err
                if (results === true)
                 { 
                    res.send({message:"user logged in",user:recordset['recordset'][0]})
                 }

                else 
                {
                    res.send({message:"incorrect password"});
                }
            })
           
        
    }
    else{
        res.send({message:"user not found"})
    }

})
})

app.listen(9000,()=>{
    console.log("listening to port 9000")
})

