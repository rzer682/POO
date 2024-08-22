import { Personne } from './personne'; // Importation du modèle de données Personne depuis le fichier personne.ts dans le même dossier.
import { Compte } from './compte'; // Importation de la classe de base Compte depuis le fichier compte.ts dans le même dossier.


// Définition de la classe Courant qui étend la classe Compte
export class Courant extends Compte {
    // In TypeScript, the 'private' keyword is used to define private members of a class. 
    // Private members can only be accessed within the class itself and not from outside the class. 
    // The '!' after the attribute name indicates that it will be initialized in the Courant class constructor. 
    // The 'protected' keyword is used to define protected members of a class. 
    // Protected members can be accessed within the class itself and its subclasses, but not from outside the class or its subclasses. 
    // In this case, '_ligneDeCredit' is a protected attribute representing the credit line of the current account, 
    // while '_courantTitulaire' is a private attribute representing the account holder of the current account. 
    // These attributes can only be accessed within the Courant class and its subclasses, but not from outside. 
    private _ligneDeCredit!: number; 
    private _courantTitulaire!: Personne;

    private static TAUX_POSITIF = 0.03;
    private static TAUX_NEGATIF = 0.0975;

    /**
     * Constructeur de la classe Courant
     * @param numero Le numero du compte
     * @param solde Le solde initial du compte
     * @param ligneDeCredit La ligne de credit du compte
     * @param titulaire Le titulaire du compte
     */
    constructor(numero: string, solde: number, ligneDeCredit: number, titulaire: Personne) {
        super(numero, solde, titulaire); // appel du constructeur de la classe parentero;
        
        this._ligneDeCredit = ligneDeCredit;
        this._courantTitulaire = titulaire;
    }
    //#region Getters/Setters
    set LigneDeCredit(ligneDeCredit: number) {
        this._ligneDeCredit = ligneDeCredit;
    }

    get LigneDeCredit(): number {
        return this._ligneDeCredit;
    }

    set Titulaire(titulaire: Personne) {
        this._courantTitulaire = titulaire;
    }

    get Titulaire(): Personne {
        return this._courantTitulaire;
    }
    //#endregion
    /**
     * Affiche la ligne de crédit du compte courant.
     */
    afficherLigneDeCredit(): void {    
        console.log(`Ligne de credit: ${this._ligneDeCredit}`);
    }
    /**
     * Retire un montant de la ligne de crédit.
     * @param montant Le montant à retirer.
     */
    retraitLigneDeCredit(montant: number): void {
        if (montant <= 0 || montant > this._ligneDeCredit) {
            console.log("Le montant du retrait doit être positif.");
            return;
        }
        this._ligneDeCredit -= montant;
    }
    /**
     * Remplit la ligne de crédit du compte courant.
     * @param montant Le montant à ajouter.
     */
    remplirLigneDeCredit(montant: number): void {
        if (montant <= 0) {
            console.log("Le montant du remplissage doit être positif.");
            return;
        }
        this._ligneDeCredit += montant;
    }

    CalculInteret(): number {
        return this.Solde * (Courant.TAUX_POSITIF - Courant.TAUX_NEGATIF);
    }
    AppliquerInteret(): void {
        this.depot(this.CalculInteret());
    }
}
