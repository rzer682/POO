"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
/**
 * Cette classe représente une personne.
 * Une personne a un nom, un prénom et une date de naissance.
 * Le mot-clé "private" signifie que ces propriétés ne sont pas accessibles directement depuis l'extérieur de la classe.
 * Les propriétés sont des champs de la classe qui permettent de stocker des informations.
 * Les noms des propriétés commencent par un underscore (_) pour indiquer qu'elles sont privées.
 * Les types des propriétés sont indiqués derrière le nom de la propriété, séparés par un point d'exclamation (!).
 * Les types sont des ensembles de valeurs possibles pour une propriété. Par exemple, le type "string" signifie que la propriété peut prendre n'importe quelle valeur qui est une chaîne de caractères.
 * Les dates sont représentées en utilisant l'objet Date de JavaScript.
 */
class Personne {
    //Propriétés (ou getters et setters)
    // Les propriétés sont des méthodes qui permettent d'accéder aux attributs privés de l'objet.
    // Les propriétés sont définies en utilisant le mot-clé "get" pour la lecture et le mot-clé "set" pour l'écriture.
    // Les propriétés permettent de contrôler l'accès aux attributs de l'objet.
    // Les propriétés peuvent contenir des instructions qui s'exécutent lorsque l'attribut est lu ou modifié.
    // Propriété qui permet de LIRE le nom de la personne
    get Nom() {
        // La propriété "Nom" renvoie la valeur actuelle de l'attribut "_Nom"
        return this._Nom;
    }
    // Propriété qui permet d'ECRIRE le nom de la personne
    set Nom(nom) {
        // La propriété "Nom" modifie la valeur actuelle de l'attribut "_Nom"
        this._Nom = nom;
    }
    // Propriété qui permet de LIRE le prénom de la personne
    get Prenom() {
        // La propriété "Prenom" renvoie la valeur actuelle de l'attribut "_Prenom"
        return this._Prenom;
    }
    // Propriété qui permet d'ECRIRE le prénom de la personne
    set Prenom(prenom) {
        // La propriété "Prenom" modifie la valeur actuelle de l'attribut "_Prenom"
        this._Prenom = prenom;
    }
    // Propriété qui permet de LIRE la date de naissance de la personne
    get DateNaiss() {
        // La propriété "DateNaiss" renvoie la valeur actuelle de l'attribut "_DateNaiss"
        return this._DateNaiss;
    }
    // Propriété qui permet d'ECRIRE la date de naissance de la personne
    set DateNaiss(dateNaissance) {
        // La propriété "DateNaiss" modifie la valeur actuelle de l'attribut "_DateNaiss"
        this._DateNaiss = dateNaissance;
    }
}
exports.Personne = Personne;
