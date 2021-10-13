const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use("/api", require("./routes/api"));

app.listen(process.env.PORT || 8001, () => {
  console.log("listening for request");
});
