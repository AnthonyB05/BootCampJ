'use strict';
const Pokemon = require('../models/pokemon.model');

exports.findAll = function (req, res) {
    Pokemon.findAll(function (err, pokemon) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', pokemon);
        res.send(pokemon);
    });
};

exports.create = function (req, res) {
    const new_pokemon = new Pokemon(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Pokemon.create(new_pokemon, function (err, pokemon) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Pokemon added successfully!", data: pokemon });
        });
    }
};

exports.findById = function (req, res) {
    Pokemon.findById(req.params.id, function (err, pokemon) {
        if (err)
            res.send(err);
        res.json(pokemon);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Pokemon.update(new Pokemon(req.body), function (err, pokemon) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Pokemon successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    Pokemon.delete(req.params.id, function (err, pokemon) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Pokemon successfully deleted' });
    });
};