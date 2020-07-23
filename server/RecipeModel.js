const mongoose = require('mongoose');

// connect to db, returns a promise, console if connected, consoler err if err
mongoose.connect('mongodb+srv://admin:admin@cluster0.c9aue.mongodb.net/Project0?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('Connected to db'))
  .catch(err => console.log(err));

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  method: { type: String, required: true }
})

module.exports = mongoose.model('recipe', recipeSchema);