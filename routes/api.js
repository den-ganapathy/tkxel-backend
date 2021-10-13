const express = require("express");
const router = express.Router();
var fs = require("fs");

let data = fs.readFileSync("dictionary.txt", "utf8").toString();
let splitData = data.split("\n");

router.get("/searchWord", async (req, res) => {
  const { search } = req.query;
  if (splitData.includes(search)) {
    const data = "The word " + search + " found";
    res.send({ data });
  } else {
    const data = "The word " + search + " not found";
    res.send({ data });
  }
});

router.get("/addWord", async (req, res) => {
  const { search } = req.query;
  if (splitData.includes(search)) {
    const data = "The word " + search + " was added";
    res.send({ data });
  } else {
    const data = "The word " + search + " already present";
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
    const data = "There is no such word to delete";
    res.send({ data });
  }
});

module.exports = router;
