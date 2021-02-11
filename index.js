const express = require("express");

const app = express();
port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Benard Ogutu's website");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
