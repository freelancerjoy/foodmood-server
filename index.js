const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const chefs = require("./Data/chefs.json");
const recipe = require("./Data/recipe.json");

app.get("/", (req, res) => {
  res.send("Food Mood");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const chefRecipes = recipe.filter((recipe) => id == recipe.recipe_id);
  res.send(chefRecipes);
});

app.listen(port, () => {
  console.log(`food mood Server on port ${port}`);
});
