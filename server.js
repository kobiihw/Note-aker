//requiring express from npm
const express = require("express")
//requiring api routes
const routes = require("./routes/apiRoutes")
//start app
const app = express()
const PORT = process.env.PORT || 3000;

const path = require("path")
// /notes opens notes html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", routes);
//listening for server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));