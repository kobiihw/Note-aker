const router = require("express").Router()
const path = require("path")
const fs = require("fs")
//getting saved notes
router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../db/db.json"))
})
  // creating db , ataching ID, posting db
router.post("/notes", function(req, res){
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")))    
    const note = req.body
    note.id = Math.random()
    db.push(note)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db))   
     res.send(note)
})
// deleting saved notes
router.delete("/notes/:id", function(req, res){
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")))  
    const updatedDb = db.filter(note => note.id != req.params.id)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(updatedDb))   
    res.send("note delete")
})


module.exports = router