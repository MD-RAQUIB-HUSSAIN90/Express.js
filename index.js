const express = require("express");
const app = express();
let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port = ${port} `);

});

// app.use((req, res) => {


//     console.log("request reached");
//     let code="<h1>Fruits</h1> <ul><li>apple</li> <li>banana</li> <li>orange</li></ul>";
//     res.send(code);
// })


app.get("/", (req, res) => {

    res.send("you contacted root path")

})
app.get("/apple", (req, res) => {

    res.send("you contacted apple path")

})
app.get("/orange", (req, res) => {

    res.send("you contacted orange path")

})
app.get("/banana", (req, res) => {

    res.send("you contacted banana path")

})
app.get("/search", (req, res) => {

 let {q}=req.query;
 if(!q){
    res.send("<h1>nothing search</h1>")
 }
    res.send(`<h1>search result for query ${q}</h1>`)
    

})

app.get("/:username/:id", (req, res) => {
  let {username,id}= req.params;
  let htmlStr= `<h1>Welcom to the page of @${username} id: ${id}</h1>`
    res.send(htmlStr);
});
