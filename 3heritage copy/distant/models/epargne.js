"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epargne = void 0;
const compte_1 = require("./compte");
class Epargne extends compte_1.Compte {
    constructor(numero, solde, tauxEpargne, titulaire) {
        super(numero, solde, titulaire);
        this._tauxEpargne = tauxEpargne;
    }
    //#region Getters/Setters
    set TauxEpargne(tauxEpargne) {
        this._tauxEpargne = tauxEpargne;
    }
    get TauxEpargne() {
        return this._tauxEpargne;
    }
    set DernierRetrait(dateDernierRetrait) {
        this.dateDernierRetrait = dateDernierRetrait;
    }
    get DernierRetrait() {
        if (!this.dateDernierRetrait) {
            throw new Error("Il n' ya pas eu encore de retrait sur ce compte épargne");
        }
        return this.dateDernierRetrait;
    }
    //#endregion
    /**
     * Permet d'epargner un montant sur le compte.
     * @param montant Le montant à epargner.
     */
    Epargner(montant) {
        if (montant <= 0) {
            console.log("Le montant de l'epargne doit être positif");
            return;
        }
        this.Solde += montant;
        console.log(`Le solde de l'epargne sera de : ${this.Solde}`);
    }
    /**
     * Permet de faire un retrait sur le compte.
     * @param montant Le montant à retirer.
     */
    retraitEpargne(montant) {
        if (montant <= 0) {
            console.log("Le montant de l'epargne doit être positif");
            return;
        }
        this.Solde -= montant;
        // Mise à jour de la date du dernier retrait avec la date courante lorsque le retrait est effectué.
        this.dateDernierRetrait = new Date();
        console.log(`A la suite du retrait à la date : ${this.dateDernierRetrait} ;  solde de l'epargne sera de : ${this.Solde}`);
    }
    /**
     * Permet de calculer les intérêts sur le compte.
     */
    calculerInterets() {
        this.Solde = this.Solde + this.Solde * this._tauxEpargne;
        console.log(`Le solde de l'epargne sera de : ${this.Solde} avec un taux de ${this._tauxEpargne}%`);
    }
}
exports.Epargne = Epargne;
