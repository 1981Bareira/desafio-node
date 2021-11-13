const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wesley')`







app.get('/', (req,res) => {
    connection.query(sql);
    connection.query(`SELECT * from people`,function (err,results){
        let objeto = '<h1>Full Cycle</h1> <br> <br>';
        for(i=0;i< results.length; i++){
            objeto += results[i].name + '<br>';
            
            
        }
    
    res.send(objeto);
        
    } );

   
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})