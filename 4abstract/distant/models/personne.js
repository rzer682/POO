"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, dateNaiss) {
        this._nom = nom;
        this._prenom = prenom;
        this._dateNaiss = dateNaiss;
    }
    set Nom(nom) {
        this._nom = nom;
    }
    get Nom() {
        return this._nom;
    }
    set Prenom(prenom) {
        this._prenom = prenom;
    }
    get Prenom() {
        return this._prenom;
    }
    set DateNaiss(dateNaiss) {
        this._dateNaiss = dateNaiss;
    }
    get DateNaiss() {
        return this._dateNaiss;
    }
}
exports.Personne = Personne;
