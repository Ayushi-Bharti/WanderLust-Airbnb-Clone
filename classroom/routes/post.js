const express = require("express");
const router = express.Router();

//posts
//Index
router.get("/", (req,res) => {
    res.send("Get for posts");
});

//shows
router.get("/:id", (req,res) => {
    res.send("Get for posts id");
});

//POST
router.post("/", (req,res) => {
    res.send("POST for posts");
});

//DELETE
router.delete("/:id", (req,res) => {
    res.send("Delete for posts id");
});

module.exports = router;