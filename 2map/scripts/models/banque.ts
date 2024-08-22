import { Personne } from "../models/personne"; // Importation du modèle de données Personne depuis le fichier personne.ts dans le même dossier.
import { Compte } from "./compte"; // Importation de la classe de base Compte depuis le fichier compte.ts dans le même dossier.

/**
 * Classe Banque qui représente une banque.
 */
export class Banque {
    private _nom: string; // Nom de la banque
    private _comptes: Map<string, Compte>; // Mappe avec les comptes, où la clé est le numéro de compte

    /**
     * Constructeur de la classe Banque.
     * @param nom Le nom de la banque
     */
    constructor(nom: string) {
        this._nom = nom;
        this._comptes = new Map<string, Compte>(); // Initialisation de la map des comptes
    }

    
    /**
     * Ajoute un compte à la banque.
     * @param compte Le compte à ajouter
     */
    Ajouter(compte: Compte): void {
        this._comptes.set(compte.Numero, compte); // Ajout du compte à la map avec le numéro de compte comme clé
    }

    
    /**
     * Supprime un compte de la banque.
     * @param numero Le numéro de compte du compte à supprimer
     */
    Supprimer(numero: string): void {
        this._comptes.delete(numero); // Suppression du compte de la map avec le numéro de compte donné comme clé
    }

    
    /**
     * Retourne le compte correspondant au numéro donné, ou undefined s'il n'existe pas.
     * @param numero Le numéro de compte du compte à récupérer
     * @returns Le compte correspondant, ou undefined s'il n'existe pas
     */
    Compte(numero: string): Compte | undefined {
        return this._comptes.get(numero); // Récupération du compte de la map avec le numéro de compte donné comme clé
    }

    
    /**
     * Retourne le total des soldes des comptes d'un client.
     * @param titulaire Le client dont on veut connaître le total des soldes
     * @returns Le total des soldes des comptes du client
     */
    AvoirDesComptes(titulaire: Personne): number {
        let total: number = 0;
        this._comptes.forEach(compte => {
            if (compte.Titulaire === titulaire) {
                total += compte.Solde; // Si le compte appartient au client, on ajoute son solde au total
            }
        });
        return total; // Retourne le total des soldes des comptes du client
    }

    
    /**
     * Affiche tous les comptes de la banque.
     */
    AfficherTousLesComptes(): void {
        this._comptes.forEach((compte, numero) => {
            console.log(`Numéro: ${numero}, Titulaire: ${compte.Titulaire.Nom}, Solde: ${compte.Solde}`); // Affiche le numéro, le nom et le solde du compte
        });
    }
}
