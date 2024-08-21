import { Personne } from "../models/personne";
import { Courant } from "../models/courant";

export class Banque {
    private _nom: string;
    private _comptes: Map<string, Courant>;

    constructor(nom: string) {
        this._nom = nom;
        this._comptes = new Map<string, Courant>();
    }

    
    Ajouter(compte: Courant): void {
        this._comptes.set(compte.Numero, compte);
    }

    
    Supprimer(numero: string): void {
        this._comptes.delete(numero);
    }

    
    Compte(numero: string): Courant | undefined {
        return this._comptes.get(numero);
    }

    
    AvoirDesComptes(titulaire: Personne): number {
        let total: number = 0;
        this._comptes.forEach(compte => {
            if (compte.Titulaire === titulaire) {
                total += compte.Solde;
            }
        });
        return total;
    }

    
    AfficherTousLesComptes(): void {
        this._comptes.forEach((compte, numero) => {
            console.log(`Numéro: ${numero}, Titulaire: ${compte.Titulaire.Nom}, Solde: ${compte.Solde}`);
        });
    }
}
