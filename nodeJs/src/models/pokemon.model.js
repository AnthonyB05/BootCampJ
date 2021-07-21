'use strict';
var dbConn = require('./../../config/db.config');
//Pokemon object create
var Pokemon = function (pokemon) {
    this.id_pok = pokemon.id_pok;
    this.nom_pok = pokemon.nom_pok;
    this.appartenir = pokemon.appartenir;
};

Pokemon.create = function (newPok, result) {
    dbConn.query("INSERT INTO pokemons set ?", newPok, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Pokemon.findById = function (id, result) {
    dbConn.query("Select * from pokemons where id_pok = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Pokemon.findAll = function (result) {
    dbConn.query("Select * from pokemons", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('pokemons : ', res);
            result(null, res);
        }
    });
};

Pokemon.update = function (pokemon, result) {
    dbConn.query("UPDATE pokemons SET nom_pok=?, appartenir=? WHERE id_pok = ?", [ pokemon.nom_pok, pokemon.appartenir, pokemon.id_pok], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Pokemon.delete = function (id, result) {
    dbConn.query("DELETE FROM pokemons WHERE id_pok = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Pokemon;