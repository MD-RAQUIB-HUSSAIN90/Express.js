const express = require("express");
const app = express();


app.use(function (req, res, next) {
    next();
});

app.set("view engine", "ejs")

app.get('/', function (req, res) {
    res.render("index", { username: "Arshkhan" });
})

app.get('/profile', function (req, res) {
    res.send("hello from profile");
})
app.get('/profile/:username/:id', function (req, res) {
    res.send(`this is ${req.params.username} and id no is :${req.params.id}`);
})
app.listen(3000);