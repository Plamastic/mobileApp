const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())

const db = mysql.createConnection({
    host: '192-254-185-70.unifiedlayer.com',
    user: 'mrnam@localhost',
    password: 'Cuongl26209',
    database: 'mrnam_Mobile_App',
    port: 3306
})
db.connect()

app.get('/database', (req,res)=>{
    var sql = "select * from User"
    db.query(sql,(err,kq)=>{
        if(err) throw err;
        console.log(kq)
        res.send(kq)
    })
})

// app.post('/database', (req,res)=>{
//     console.log(req.body)
//     var data = {
//         UserName: req.body.UserName,
//         PassWord: req.body.PassWord,
//         idUser: req.body,idUser
//     }
//     var sql = 'insert into User set ?'
//     db.query(sql,data,(err,kq)=>{
//         if(err) throw err
//         console.log(kq)
//         res.send({
//             status: "Them thanh cong",
//             UserName: req.body.UserName,
//             PassWord: req.body.PassWord
//         })
//     })
// })

app.listen(3000,'192.168.1.93',()=>{
    console.log("server dang chay nha")
})