const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require ('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'L2015eon!',
    database: 'easypeasy'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = 
    "SELECT * FROM general_ledger"; 
        db.query(sqlSelect, (err, result) => {
            res.send(result);
        });
      
})
app.post("/api/insert", (req, res) => {

    const date = req.body.date;
    const accountId = req.body.accountId;
    const contactId = req.body.contactId;
    const memo = req.body.memo;
    const amount = req.body.amount;

const sqlInsert = 
"INSERT INTO general_ledger (date, accountId, contactId, memo, amount) VALUES (?, ?, ?, ?, ?)"; 
    db.query(sqlInsert, [date, accountId, contactId, memo, amount], (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
