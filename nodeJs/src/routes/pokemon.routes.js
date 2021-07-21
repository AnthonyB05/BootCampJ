const express = require('express')
const router = express.Router()
const pokemonController =   require('../controllers/pokemon.controller');
// Retrieve all pokemons
router.get('/', pokemonController.findAll);
// Create a new pokemon
router.post('/', pokemonController.create);
// Retrieve a single pokemon with id
router.get('/:id', pokemonController.findById);
// Update a pokemon with id
router.put('/', pokemonController.update);
// Delete a pokemon with id
router.delete('/:id', pokemonController.delete);
module.exports = router