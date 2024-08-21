"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banque = void 0;
class Banque {
    constructor(nom) {
        this._nom = nom;
        this._comptes = new Map();
    }
    Ajouter(compte) {
        this._comptes.set(compte.Numero, compte);
    }
    Supprimer(numero) {
        this._comptes.delete(numero);
    }
    Compte(numero) {
        return this._comptes.get(numero);
    }
    AvoirDesComptes(titulaire) {
        let total = 0;
        this._comptes.forEach(compte => {
            if (compte.Titulaire === titulaire) {
                total += compte.Solde;
            }
        });
        return total;
    }
    AfficherTousLesComptes() {
        this._comptes.forEach((compte, numero) => {
            console.log(`Numéro: ${numero}, Titulaire: ${compte.Titulaire.Nom}, Solde: ${compte.Solde}`);
        });
    }
}
exports.Banque = Banque;
