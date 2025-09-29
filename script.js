const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get('/', function (req, res) {
    res.render("index");
})
app.get('/error', function (req, res, next) {
    throw Error("this is a forced error");
})

app.get('/contact', function (req, res) {
    res.render("contact");
})
app.get('/profile/:username/:id', function (req, res) {
    res.send(`this is ${req.params.username} and id no is :${req.params.id}`);
})

app.use(function errorHandler(err, req, res, next) {
    if (err.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render("error", { error: err });
});

app.listen(3000);