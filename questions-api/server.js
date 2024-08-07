const express = require("express");
const fs = require("fs");
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

const questions = JSON.parse(fs.readFileSync("questions.json", "utf8"));

app.get("/random-questions", (req, res) => {
  // const shuffled = questions.sort(() => 0.5 - Math.random());
  // const selected = shuffled.slice(0, 1);
  res.json(selected);
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
