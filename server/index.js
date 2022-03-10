const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "CRUDdb",
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res) => {
    const movieName = req.body.name
    const movieReview = req.body.review
    const sqlInsert = 
        "insert into movie_reviews (mname, mreview) values (?,?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err);
    });
});;

app.listen(3001, () => {
    console.log("running on port 3001");
});