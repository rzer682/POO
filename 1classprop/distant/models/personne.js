"use strict";
class Personne {
    setNom(nom) {
        this._nom = nom;
    }
    getNom() {
        return this._nom;
    }
    setPrenom(prenom) {
        this._prenom = prenom;
    }
    getPrenom() {
        return this._prenom;
    }
    setDateNaiss(dateNaiss) {
        this._dateNaiss = dateNaiss;
    }
    getDateNaiss() {
        return this._dateNaiss;
    }
}
class Courant {
    // Getters et Setters
    setNumero(numero) {
        this._numero = numero;
    }
    getNumero() {
        return this._numero;
    }
    setSolde(solde) {
        this._solde = solde;
    }
    getSolde() {
        return this._solde;
    }
    setLigneDeCredit(ligneDeCredit) {
        this._ligneDeCredit = ligneDeCredit;
    }
    getLigneDeCredit() {
        return this._ligneDeCredit;
    }
    setTitulaire(titulaire) {
        this._titulaire = titulaire;
    }
    getTitulaire() {
        return this._titulaire;
    }
    // Méthodes pour le retrait et le dépôt
    Retrait(montant) {
        if (montant <= 0) {
            console.log("Le montant du retrait doit être positif.");
            return false;
        }
        if (this._solde - montant < -this._ligneDeCredit) {
            console.log("Fonds insuffisants. Le retrait dépasse la ligne de crédit.");
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
