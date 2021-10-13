const express = require("express");
const router = express.Router();
var fs = require("fs");

let data = fs.readFileSync("dictionary.txt", "utf8").toString();
let splitData = data.split("\n");

router.get("/searchWord", async (req, res) => {
  const { search } = req.query;
  if (splitData.includes(search)) {
    const data = "The word " + search + " is present";
    res.send({ data });
  } else {
    const data = "The word " + search + " was not found";
    res.send({ data });
  }
});

router.get("/addWord", async (req, res) => {
  const { search } = req.query;
  if (splitData.includes(search)) {
    const data = "Cannot add! The word " + search + " is already added";
    res.send({ data });
  } else {
    splitData.push(search);
    const data = "The word " + search + " was added";
    res.send({ data });
  }
});

router.get("/removeWord", async (req, res) => {
  const { search } = req.query;
  if (splitData.includes(search)) {
    splitData = splitData.filter((item) => item !== search);
    const data = "The word " + search + " is Deleted";
    res.send({ data });
  } else {
    const data = "Cannot Delete! No such word found";
    res.send({ data });
  }
});

module.exports = router;
