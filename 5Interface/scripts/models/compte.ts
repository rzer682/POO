import { Personne } from './personne';
import { IBanker } from '../Interface/IBanker';
import { ICustomer } from '../Interface/ICustomer';

export abstract class Compte implements IBanker, ICustomer {
    private _numero!: string;
    private _solde!: number;
    private _titulaire: Personne;

    constructor(numero: string, solde: number, titulaire: Personne) {
        this._numero = numero;
        this._solde = solde;
        this._titulaire = titulaire;
    }
    
    //#region Getters/Setters
    public get titulaire (): Personne {
        return this._titulaire;
    }
    public set titulaire (titulaire: Personne) {
        this._titulaire = titulaire;
    }
    public get solde (): number {
        return this._solde;
    }
    public set solde (solde: number) {
        this._solde = solde;
    }
    public get numero (): string {
        return this._numero;
    }

    public set numero (numero: string) {
        this._numero = numero;
    }
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

    protected abstract CalculInteret(): number
    abstract  AppliquerInteret() : void

}