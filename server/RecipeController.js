const Recipe = require('./RecipeModel');

const RecipeController = {

  // create recipe
  createRecipe(req, res) {
    const { name, ingredients, method } = req.body;

    Recipe.create({ name, ingredients, method }, (err, result) => {
      if (err) return res.sendStatus(404);
      return res.status(201).send('Recipe saved.');
    });
  },

  // get recipe
  getRecipe(req, res) {
    const name = req.params.name;

    Recipe.findOne({ name }, (err, result) => {
      if (err) return res.status(404);
      if (!result) return res.send('Recipe not found.');
      return res.status(200).json(result);
    });
  },

  // update recipe
  updateRecipe(req, res) {
    const { name } = req.params;
    const { name: newName, ingredients: newIngredients, method: newMethod } = req.body;
    Recipe.updateOne({ name }, { name: newName, ingredients: newIngredients, method: newMethod }, (err, result) => {
      if (err) return res.sendStatus(404);
      if (!result) return res.send('Recipe not found.');
      return res.status(200).send('Updated successfully.');
    });
  },

  // delete recipe
  deleteRecipe(req, res) {
    const name = req.params.name;
    Recipe.deleteOne({ name }, (err, result) => {
      if (err) return res.sendStatus(404);
      return res.status(200).send('Deleted successfully.');
    })
  },
};

module.exports = RecipeController;
