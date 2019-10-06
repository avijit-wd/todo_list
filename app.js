const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
let items = ["buy food", "cook food", "eat food"];
let workItems = [];
app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", (req, res) => {
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "work list", newListItems: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
