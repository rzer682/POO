// Typescript Course - Part 1: Classes and Properties

// Importation des classes
import {Courant} from "./models/courant";
import {Personne} from "./models/personne";

// Création d'une instance de la classe Personne
const personne : Personne = new Personne();

// Affectation des propriétés de l'instance
personne.Nom = "Zerghani";
personne.Prenom = "R";
personne.DateNaiss = new Date("1980-01-01");

// Affichage des propriétés de l'instance
console.log("Test affichage personne :");
console.log(`Nom : ${personne.Nom}`);
console.log(`Nom : ${personne.Prenom}`);
console.log(`Nom : ${personne.DateNaiss.toDateString()}`);

// Création d'une instance de la classe Courant
const courant : Courant = new Courant();

// Affectation des propriétés de l'instance
courant.Numero = "0000-0000-0001";
courant.LigneDeCredit = 500;
courant.Titulaire = personne;

// Affichage des propriétés de l'instance
console.log("Test affichage courant");
console.log(`Numéro : ${courant.Numero}`);
console.log(`Solde : ${courant.Solde}`);
console.log(`Ligne de credit : ${courant.LigneDeCredit}`);
console.log(`Titulaire : `, courant.Titulaire);

// Appel des méthodes de l'instance
console.log("Test des méthodes de l'instance");
courant.Depot(2000);
console.log(`Solde après dépôt de 2000 : ${courant.Solde}`);

courant.Retrait(700);
console.log(`Solde après retrait de 700 : ${courant.Solde}`);
