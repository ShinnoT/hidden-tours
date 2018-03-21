const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Express Server</h1><p>hello world :)</p>");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
