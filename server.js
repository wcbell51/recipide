const express = require('express');
const app = express();
const mongoose = require('mongoose');

const recipeController = require('./server/RecipeController');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const recipeRouter = express.Router();
app.use('/recipe', recipeRouter);

// create recipe
recipeRouter.post('/', recipeController.createRecipe);

// get recipe
recipeRouter.get('/:name', recipeController.getRecipe);

// update recipe
recipeRouter.patch('/:name', recipeController.updateRecipe);

// delete recipe
recipeRouter.delete('/:name', recipeController.deleteRecipe);

// error handler
app.use('*', (req,res) => {
  res.status(404).send('Route not found');
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));