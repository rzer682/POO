"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
class Courant {
    constructor(numero, solde, ligneDeCredit, titulaire) {
        this._numero = numero;
        this._solde = solde;
        this._ligneDeCredit = ligneDeCredit;
        this._titulaire = titulaire;
    }
    set Numero(numero) {
        this._numero = numero;
    }
    get Numero() {
        return this._numero;
    }
    set Solde(solde) {
        this._solde = solde;
    }
    get Solde() {
        return this._solde;
    }
    set LigneDeCredit(ligneDeCredit) {
        this._ligneDeCredit = ligneDeCredit;
    }
    get LigneDeCredit() {
        return this._ligneDeCredit;
    }
    set Titulaire(titulaire) {
        this._titulaire = titulaire;
    }
    get Titulaire() {
        return this._titulaire;
    }
    Retrait(montant) {
        if (montant <= 0) {
            console.log("Le montant du retrait doit être positif.");
            return false;
        }
        if (this._solde - montant < -this._ligneDeCredit) {
            console.log("Fonds insuffisants. Le retrait dépasse le solde courant.");
            return false;
        }
        this._solde -= montant;
        return true;
    }
    Depot(montant) {
        if (montant <= 0) {
            console.log("Le montant du dépôt doit être positif.");
            return;
        }
        this._solde += montant;
    }
}
exports.Courant = Courant;
