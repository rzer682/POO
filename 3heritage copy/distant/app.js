"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personne_1 = require("./models/personne");
const courant_1 = require("./models/courant");
const banque_1 = require("./models/banque");
const titulaire1 = new personne_1.Personne("Dupont", "Jean", new Date(1985, 4, 12));
console.log(`Nom: ${titulaire1.Nom}`);
console.log(`Prénom: ${titulaire1.Prenom}`);
console.log(`Date de naissance: ${titulaire1.DateNaiss.toDateString()}`);
const compte1 = new courant_1.Courant("123456789", 1000, 500, titulaire1);
const compte2 = new courant_1.Courant("987654321", 2000, 300, titulaire1);
const compte3 = new courant_1.Courant("987655521", 2000, 300, titulaire1);
console.log(`Numéro de compte: ${compte1.Numero}`);
console.log(`Solde: ${compte1.Solde}`);
console.log(`Ligne de crédit: ${compte1.LigneDeCredit}`);
console.log(`Titulaire: ${compte1.Titulaire.Nom} ${compte1.Titulaire.Prenom}`);
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
const maBanque = new banque_1.Banque("Banque Centrale");
maBanque.Ajouter(compte1);
maBanque.Ajouter(compte2);
maBanque.Ajouter(compte3);
maBanque.AfficherTousLesComptes();
// Suppression d'un compte
maBanque.Supprimer("123456789");
// Vérification après suppression
console.log("\nAprès suppression du compte 123456789:");
maBanque.AfficherTousLesComptes();
