"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
class Compte {
    constructor(numero, solde, titulaire) {
        this._numero = numero;
        this._solde = solde;
        this._titulaire = titulaire;
    }
    //#region Getters/Setters
    get titulaire() {
        return this._titulaire;
    }
    set titulaire(titulaire) {
        this._titulaire = titulaire;
    }
    get solde() {
        return this._solde;
    }
    set solde(solde) {
        this._solde = solde;
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
    set Titulaire(titulaire) {
        this._titulaire = titulaire;
    }
    get Titulaire() {
        return this._titulaire;
    }
    //#endregion
    /**
     * Retrait d'un montant sur le compte courant.
     * @param montant Le montant à retirer.
     * @returns true si le retrait a réussi, false sinon.
     */
    retrait(montant) {
        if (montant <= 0) {
            console.log("Le montant du retrait doit être positif.");
            throw new Error("Le montant du retrait doit être positif.");
        }
        if (this._solde - montant < 0) {
            console.log("Fonds insuffisants. Le retrait dépasse le solde courant.");
        }
        this._solde -= montant;
        return true;
    }
    /**
     * Dépôt d'un montant sur le compte courant.
     * @param montant Le montant à déposer.
     */
    depot(montant) {
        if (montant <= 0) {
            console.log("Le montant du dépôt doit être positif.");
            throw new Error("Le montant du dépôt doit être positif.");
        }
        this._solde += montant;
        console.log(`Nouveau solde: ${this._solde}`);
        return true;
    }
}
exports.Compte = Compte;
