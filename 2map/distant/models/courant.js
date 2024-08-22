"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
const compte_1 = require("./compte"); // Importation de la classe de base Compte depuis le fichier compte.ts dans le même dossier.
// Définition de la classe Courant qui étend la classe Compte
class Courant extends compte_1.Compte {
    /**
     * Constructeur de la classe Courant
     * @param numero Le numero du compte
     * @param solde Le solde initial du compte
     * @param ligneDeCredit La ligne de credit du compte
     * @param titulaire Le titulaire du compte
     */
    constructor(numero, solde, ligneDeCredit, titulaire) {
        super(numero, solde, titulaire); // appel du constructeur de la classe parentero;
        this._ligneDeCredit = ligneDeCredit;
        this._courantTitulaire = titulaire;
    }
    //#region Getters/Setters
    set LigneDeCredit(ligneDeCredit) {
        this._ligneDeCredit = ligneDeCredit;
    }
    get LigneDeCredit() {
        return this._ligneDeCredit;
    }
    set Titulaire(titulaire) {
        this._courantTitulaire = titulaire;
    }
    get Titulaire() {
        return this._courantTitulaire;
    }
    //#endregion
    /**
     * Retrait d'un montant sur le compte courant.
     * @param montant Le montant à retirer.
     * @returns true si le retrait a réussi, false sinon.
     */
    Retrait(montant) {
        // Vérifie si le montant à retirer est positif
        if (montant.Solde <= 0) {
            console.log("Le montant du retrait doit être positif.");
            return false;
        }
        // Vérifie si le solde courant - le montant à retirer est supérieur à la ligne de crédit
        if (this.Solde - montant.Solde < -this._ligneDeCredit) {
            console.log("Fonds insuffisants. Le retrait dépasse le solde courant.");
            return false;
        }
        // Si tous les tests sont réussis, le montant est déduit du solde courant
        this.Solde -= montant.Solde;
        return true;
    }
    /**
     * Dépôt d'un montant sur le compte courant.
     * @param montant Le montant à déposer.
     */
    Depot(montant) {
        if (montant.Solde <= 0) {
            console.log("Le montant du dépôt doit être positif.");
            return;
        }
        this.Solde += montant.Solde; // le solde est augmenté du montant à déposer
    }
    /**
     * Affiche la ligne de crédit du compte courant.
     */
    afficherLigneDeCredit() {
        console.log(`Ligne de credit: ${this._ligneDeCredit}`);
    }
    /**
     * Retire un montant de la ligne de crédit.
     * @param montant Le montant à retirer.
     */
    retraitLigneDeCredit(montant) {
        if (montant <= 0) {
            console.log("Le montant du retrait doit être positif.");
            return;
        }
        this._ligneDeCredit -= montant;
    }
    /**
     * Remplit la ligne de crédit du compte courant.
     * @param montant Le montant à ajouter.
     */
    remplirLigneDeCredit(montant) {
        if (montant <= 0) {
            console.log("Le montant du remplissage doit être positif.");
            return;
        }
        this._ligneDeCredit += montant;
    }
}
exports.Courant = Courant;
