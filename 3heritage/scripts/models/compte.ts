import { Personne } from './personne';


export class Compte {
    private _numero!: string;
    private _solde!: number;
    private _titulaire!: Personne;

    constructor(numero: string, solde: number, titulaire: Personne) {
        this._numero = numero;
        this._solde = solde;
        this._titulaire = titulaire;
    }
    //#region Getters/Setters
    set Numero(numero: string) {
        this._numero = numero;
    }

    get Numero(): string {
        return this._numero;
    }

    set Solde(solde: number) {
        this._solde = solde;
    }

    get Solde(): number {
        return this._solde;
    }

    set Titulaire(titulaire: Personne) {
        this._titulaire = titulaire;
    }   

    get Titulaire(): Personne {
        return this._titulaire;
    }
    //#endregion


    /**
     * Retrait d'un montant sur le compte courant.
     * @param montant Le montant à retirer.
     * @returns true si le retrait a réussi, false sinon.
     */
    retrait(montant: number): boolean | undefined {
        if (montant <= 0) {
            console.log("Le montant du retrait doit être positif.");
            throw new Error("Le montant du retrait doit être positif.");
        }
        if (this._solde - montant < 0) {
            console.log("Fonds insuffisants. Le retrait dépasse le solde courant.");
            throw new Error("Fonds insuffisants. Le retrait ètendue à ce compte.");
            ;
        }
        this._solde -= montant;
        return true;
    }
    /**
     * Dépôt d'un montant sur le compte courant.
     * @param montant Le montant à déposer.
     */
    depot(montant: number): boolean | void {
        if (montant <= 0) {
            console.log("Le montant du dépôt doit être positif.");
            throw new Error("Le montant du dépôt doit être positif.");
        }
        this._solde += montant;
        console.log(`Nouveau solde: ${this._solde}`);
        return true 

    }

    afficherTransactions(transactions: any [], montant: number): any[] {
        let localTransactions : any = []
        if (this.retrait(montant)) {
            // Si le retrait a réussi, on ajoute le montant à la liste des
            // transactions locales
            localTransactions.push(montant);
        } else {
            // Sinon, on ajoute un message d'erreur
            localTransactions.push({ erreur: "Fonds insuffisants. Le retrait dépasse le solde courant." });
        }
        if (this.depot(montant)) {
            // Si le dépôt a réussi, on ajoute le montant à la liste des
            // transactions locales
            localTransactions.push(montant);
        } else {
            // Sinon, on ajoute un message d'erreur
            localTransactions.push({ erreur: "Le montant du dépôt doit être positif." });
        }
        // On concatène les transactions locales à la liste des
        // transactions passées en paramètre et on la retourne
        return transactions.concat(localTransactions)
    }

}