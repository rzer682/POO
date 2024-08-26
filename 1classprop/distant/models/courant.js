"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
/**
 * Une classe qui représente un compte courant.
 *
 * Un compte courant possède un numéro de compte, un solde, une ligne de crédit et un titulaire.
 * Le solde est initialisé à 0 si on ne le précise pas.
 * La ligne de crédit et le titulaire sont initialisés à l'aide des paramètres du constructeur.
 */
class Courant {
    constructor() {
        this._Solde = 0; // Le solde initialisé à 0 si on ne le précise pas
    }
    // Les getters et setters pour les propriétés de l'objet
    // Ils permettent de contrôler l'accès en lecture et en écriture
    // aux propriétés de l'objet
    // La propriété Numero est en lecture seule
    // Elle renvoie la valeur de la propriété _Numero
    get Numero() {
        return this._Numero;
    }
    // La propriété Solde est en lecture seule
    // Elle renvoie la valeur de la propriété _Solde
    get Solde() {
        return this._Solde;
    }
    // La propriété LigneDeCredit est en lecture seule
    // Elle renvoie la valeur de la propriété _LigneDeCredit
    get LigneDeCredit() {
        return this._LigneDeCredit;
    }
    // La propriété Titulaire est en lecture seule
    // Elle renvoie la valeur de la propriété _Titulaire
    get Titulaire() {
        return this._Titulaire;
    }
    // Les setters pour les propriétés de l'objet
    // Ils permettent de définir la valeur d'une propriété
    // de l'objet
    // Le setter pour la propriété Numero
    // Il définit la valeur de la propriété _Numero
    set Numero(numero) {
        this._Numero = numero;
    }
    // Le setter pour la propriété Solde
    // Il définit la valeur de la propriété _Solde
    set Solde(solde) {
        this._Solde = solde;
    }
    // Le setter pour la propriété LigneDeCredit
    // Il définit la valeur de la propriété _LigneDeCredit
    set LigneDeCredit(ligneDeCredit) {
        this._LigneDeCredit = ligneDeCredit;
    }
    // Le setter pour la propriété Titulaire
    // Il définit la valeur de la propriété _Titulaire
    set Titulaire(titulaire) {
        this._Titulaire = titulaire;
    }
    /**
     * La méthode Retrait permet de retirer un montant sur le compte courant.
     * @param montant Le montant à retirer.
     */
    Retrait(montant) {
        // Vérifie si le montant est positif avant de le soustraire du solde
        if (montant > 0) {
            // Soustrait le montant du solde
            this._Solde -= montant;
        }
    }
    /**
     * La méthode Depot permet de déposer un montant sur le compte courant.
     * @param montant Le montant à déposer.
     */
    Depot(montant) {
        // Vérifie si le montant est négatif avant de l'ajouter au solde
        if (montant <= 0) {
            // Ajoute le montant au solde
            this._Solde += montant;
        }
    }
}
exports.Courant = Courant;
