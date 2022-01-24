const express = require('express');
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


var sql = require("mssql");
const e = require('connect-flash');

// config for your database
var config = {
    user: 'sarah',
    password: 'sarahfatima99',
    server: 'DESKTOP-MFGD6N8',
    database: 'Hyperian',


    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true

    },
    port: 1433

};

sql.connect(config, function (err) {
    if (err) console.log(err);
    console.log("connected")
});


app.get("/", (req, res) => {


    res.send("My api");

})

app.post("/register", (req, res) => {
    var request = new sql.Request()
    bcrypt.hash(req.body.password, 10).then((hash) => {

        const name = req.body.name
        const email = req.body.email
        const password = hash

        request.query(`select * from  [Hyperian].[dbo].[Users] where Email = 
        '${email}'`, function (err, recordset) {

            if (err) {
                console.log(err)
            }
            else if (recordset['recordset'][0]) {
                res.send({ message: "user already registered" })
            }
            else {
                request.query(`INSERT INTO [Hyperian].[dbo].[Users] OUTPUT Inserted.ID  VALUES ('${name}', '${email}','${password}')`, function (err, recordset) {
                    console.log(recordset)
                    if (err) {
                        console.log(err)
                    }

                    else {
                        res.send({ message: "user registered", user_id: recordset['recordset'][0]['ID'] })
                    }



                });

            }
        })

    })
})




const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send("we need a token pls give it to us")
    }
    else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "U FAILED TO AUTHENTICATE" })

            }
            else {
                req.userId = decoded.id
                next();
            }
        })
    }

}



app.post('/form', (req, res) => {
    var request = new sql.Request()
    const user_id = req.body.user_id;
    console.log("user_id:", req.body.user_id)
    request.query(`INSERT INTO [Hyperian].[dbo].[Form] (User_id) OUTPUT Inserted.Form_id VALUES('${user_id}')`, function (err, recordset) {

        if (err) {
            console.log(err)

            res.send({ message: "Form registered FAILED" })
        }
        else {


            res.send({ message: "Form registered", form_id: recordset['recordset'][0]['Form_id'] })
            console.log(recordset)
        }
    });

})


app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send('Authenticated')
})






app.post("/login", (req, res) => {
    var request = new sql.Request()
    const {
        email,
        password
    } = req.body
    var id = 0;
    var form_id = 0;

    request.query(`select * from  [Hyperian].[dbo].[Users] where Email = '${email}'`, function (err, recordset) {
       console.log(recordset)
        if (recordset['recordset'][0]) {


            bcrypt.compare(password, recordset['recordset'][0].Password, (err, results) => {
                if (err)
                    throw err
                if (results === true) {
                    id = recordset['recordset'][0].ID

                    const token = jwt.sign({ id }, "jwtSecret", {
                        expiresIn: 300
                    })


                    res.json({ auth: true, token: token, result: recordset['recordset'][0].ID })

                }

                else {
                    res.send({ auth: false, message: "incorrect password" });
                }
            })


        }
        else {
            res.send({ auth: false, message: "user not found" })
        }

    })




})


app.post('/form/question', (req, res) => {
    var request = new sql.Request()
    const Question_number = req.body.Ques_no
    const form_id = req.body.form_id
    const label = req.body.label
    console.log(req.body)
    if (label == '') {
        const Question_type = req.body.type
        console.log("without label")

        request.query(`INSERT INTO [Hyperian].[dbo].[Questions] ( Question_number, Question_type,Form_id) VALUES('${Question_number}', (SELECT  Question_code FROM [Hyperian].[dbo].[Question_type]  WHERE Question_type = '${Question_type}'),${form_id})`, function (err, recordset) {

            if (err) {
                console.log(err)
            }
            else {
                console.log('success')
            }

        })


    }
    else {
        console.log("with label")
        request.query(`UPDATE [Hyperian].[dbo].[Questions] set Question_text='${label}' where Form_id='${form_id}' and Question_number='${Question_number}'`, function (err, recordset) {

            if (err) {
                console.log(err)
            }
            else {
                console.log('success')
            }

        })


    }


})




app.listen(9000, () => {
    console.log("listening to port 9000")
})

