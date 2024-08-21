import { Personne } from './personne';

export class Courant {
    private _numero!: string;
    private _solde!: number;
    private _ligneDeCredit!: number;
    private _titulaire!: Personne;

    constructor(numero: string, solde: number, ligneDeCredit: number, titulaire: Personne) {
        this._numero = numero;
        this._solde = solde;
        this._ligneDeCredit = ligneDeCredit;
        this._titulaire = titulaire;
    }
    set Numero(numero: string){
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

    set LigneDeCredit(ligneDeCredit: number) {
        this._ligneDeCredit = ligneDeCredit;
    }

    get LigneDeCredit(): number {
        return this._ligneDeCredit;
    }

    set Titulaire(titulaire: Personne) {
        this._titulaire = titulaire;
    }

    get Titulaire(): Personne {
        return this._titulaire;
    }

    
    Retrait(montant: number): boolean {
        if (montant <= 0) {
            console.log("Le montant du retrait doit être positif.");
            return false;
        }
        if (this._solde - montant < -this._ligneDeCredit) {
            console.log("Fonds insuffisants. Le retrait dépasse le solde courant.");
            return false;
        }
        this._solde -= montant;
        return true;
    }

    Depot(montant: number): void {
        if (montant <= 0) {
            console.log("Le montant du dépôt doit être positif.");
            return;
        }
        this._solde += montant;
    }
}
