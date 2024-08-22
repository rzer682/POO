import { Compte } from "./compte"
import { Personne } from "./personne"

export class Epargne extends Compte {
    
    ;
    public dateDernierRetrait?: Date;

    private static TAUX = 0.045;
    
    constructor(numero: string, solde: number, tauxEpargne: number, titulaire: Personne) {
        super(numero, solde, titulaire);
        
    }
    //#region Getters/Setters
    
    set DernierRetrait(dateDernierRetrait: Date) {
        this.dateDernierRetrait = dateDernierRetrait;
    }

    get DernierRetrait(): Date {
        if (!this.dateDernierRetrait) {
            throw new Error("Il n' ya pas eu encore de retrait sur ce compte épargne");
        }
        return this.dateDernierRetrait;
    }
    //#endregion
    
    /**
     * Permet d'epargner un montant sur le compte.
     * @param montant Le montant à epargner.
     */
    Epargner(montant: number): void {
        if (montant <= 0) {
            console.log("Le montant de l'epargne doit être positif");
            return;
        }
        this.Solde += montant;
        console.log(`Le solde de l'epargne sera de : ${this.Solde}`);
    }

    /**
     * Permet de faire un retrait sur le compte.
     * @param montant Le montant à retirer.
     */
    retraitEpargne(montant: number): void {
        if (montant <= 0) {
            console.log("Le montant de l'epargne doit être positif");
            return; 
        }
        this.Solde -= montant;
        // Mise à jour de la date du dernier retrait avec la date courante lorsque le retrait est effectué.
        this.dateDernierRetrait = new Date();

        console.log(`A la suite du retrait à la date : ${this.dateDernierRetrait} ;  solde de l'epargne sera de : ${this.Solde}`);
    }   

    /**
     * Permet de calculer les intérêts sur le compte.
     */
    CalculInteret(): number {
        this.Solde +=  this.Solde * Epargne.TAUX;
        return this.Solde;
    }
    AppliquerInteret(): void {
        this.depot(this.CalculInteret());
    }



}