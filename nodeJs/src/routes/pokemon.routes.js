const express = require('express')
const router = express.Router()
const pokemonController =   require('../controllers/pokemon.controller');
// Retrieve all pokemons
router.get('/', pokemonController.findAll);
// Create a new pokemon
router.post('/', pokemonController.create);
// Retrieve a single pokemon with id
router.get('/:id', pokemonController.findById);
// Update a pokemon
router.put('/', pokemonController.update);
// Catch a pokemon with nom
router.put('/catch', pokemonController.catch);
// Release a pokemon with nom
router.put('/release', pokemonController.release);
// Delete a pokemon with id
router.delete('/:id', pokemonController.delete);
module.exports = router