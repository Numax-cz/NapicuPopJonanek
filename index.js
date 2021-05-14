const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
const connection = require('./mysql');


app.get("/", (req, res) => {
    res.render("index");
});



app.post("/api/update", (req, res) => {
    var ClickCounter = req.body.ClickCounter;

    if (ClickCounter > 1000) {
        ClickCounter = 1000
    }

    connection.query(`SELECT counter FROM popjonanek WHERE id='1'`, function (err, DataBaseData, fl) {
        var x = Math.floor(ClickCounter);
        var y = DataBaseData[0].counter + x;
        connection.query(`UPDATE popjonanek SET counter='${y}' WHERE id='1'`, function (err, DataBaseData, fl) {
            connection.query(`SELECT counter FROM popjonanek WHERE id='1'`, function (err, DataBaseData, fl) {
                res.json(DataBaseData[0].counter);
            });
        });
    });
});


app.listen(process.env.PORT, () => {
    console.log("Aplikace běží na portu: " + process.env.PORT);
});
connection.connect(function (e) {
    if (e) throw e;
    console.log('Aplikace napojena na databázu!');
})
