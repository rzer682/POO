"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Code de démonstration pour la gestion des comptes bancaires.
 */
const personne_1 = require("./models/personne");
const epargne_1 = require("./models/epargne");
const courant_1 = require("./models/courant");
const banque_1 = require("./models/banque");
/**
 * Création d'un objet Personne.
 */
const titulaire1 = new personne_1.Personne("Dupont", "Jean", new Date(1985, 4, 12));
/**
 * Affichage des informations du titulaire.
 */
console.log(`Nom: ${titulaire1.Nom}`);
console.log(`Prénom: ${titulaire1.Prenom}`);
console.log(`Date de naissance: ${titulaire1.DateNaiss.toDateString()}`);
/**
 * Création de plusieurs objets Compte.
 */
const compte1 = new courant_1.Courant("1234", 1000, 200, titulaire1);
const compte2 = new courant_1.Courant("5678", 5000, 500, titulaire1);
const compte3 = new epargne_1.Epargne("9012", 10000, 0.05, titulaire1);
/**
 * Affichage des informations d'un compte.
 */
console.log(`Numéro de compte: ${compte1.Numero}`);
console.log(`Solde: ${compte1.Solde}`);
console.log(`Ligne de crédit: ${compte1.LigneDeCredit}`);
console.log(`Titulaire: ${compte1.Titulaire.Nom} ${compte1.Titulaire.Prenom}`);
/**
 * Tentatives de retrait et de dépôt sur le compte.
 */
console.log("\nTentative de retrait de 300...");
if (compte1.retrait(300)) {
    console.log(`Retrait effectué. Nouveau solde: ${compte1.Solde}`);
}
else {
    console.log("Retrait échoué.");
}
console.log("\nDépôt de 500...");
compte1.depot(500);
console.log(`Nouveau solde: ${compte1.Solde}`);
console.log("\nTentative de retrait de 2000...");
if (compte1.retrait(2000)) {
    console.log(`Retrait effectué. Nouveau solde: ${compte1.Solde}`);
}
else {
    console.log("Retrait échoué.");
}
/**
 * Création d'une banque et ajout de plusieurs comptes.
 */
const maBanque = new banque_1.Banque("Banque Centrale");
maBanque.Ajouter(compte1);
maBanque.Ajouter(compte2);
maBanque.Ajouter(compte3);
/**
 * Affichage de tous les comptes de la banque.
 */
maBanque.AfficherTousLesComptes();
/**
 * Suppression d'un compte.
 */
maBanque.Supprimer("123456789");
/**
 * Affichage des comptes restants.
 */
console.log("\nAprès suppression du compte 123456789:");
maBanque.AfficherTousLesComptes();
