const express = require ('express');
const app = express();
const mysql = require ('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'L2015eon!',
    database: 'easypeasy'
});

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO general_ledger (date, memo, amount) VALUES ('2021-06-21','Glue', '5');" 
    db.query(sqlInsert, (err, result) => {
        res.send("hello winter");
    })
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
