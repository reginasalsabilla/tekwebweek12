const express = require("express");
const app = express();
const port = 3000;
//route default
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//hello
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
//home
app.get("/home", (req, res) => {
  res.send("Tugas Regina Salsabilla");
});
//about
app.use("/about", (req, res) => {
  res.send("Nama : Regina Salsabilla");
});
//contact
app.delete("/contact", (req, res) => {
  res.send("Contact has been deleted");
});
//content
app.put("/content", (req, res) => {
  res.send("Tugas Week 12 Teknologi Web");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
