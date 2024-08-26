class Personne {
    private _nom!: string;
    private _prenom!: string;
    private _dateNaiss!: Date;

    setNom(nom: string): void {
        this._nom = nom;
    }
    getNom(): string {
        return this._nom;
    }
    setPrenom(prenom: string): void {
        this._prenom = prenom;
    }
    getPrenom(): string {
        return this._prenom;
    }

    setDateNaiss(dateNaiss: Date): void {
        this._dateNaiss = dateNaiss;
    }

    getDateNaiss(): Date {
        return this._dateNaiss;
    }

}

class Courant {
    private _numero!: string;
    private _solde!: number;
    private _ligneDeCredit!: number;
    private _titulaire!: Personne;


    // Getters et Setters

    setNumero (numero: string): void {
        this._numero = numero;
    }
    getNumero(): string {
        return this._numero;
    }

    setSolde(solde: number): void {
        this._solde = solde;
    }
    getSolde(): number {
        return this._solde;
    }
    
    setLigneDeCredit(ligneDeCredit: number): void {
        this._ligneDeCredit = ligneDeCredit;
    }
    getLigneDeCredit(): number {
        return this._ligneDeCredit;
    }

    setTitulaire(titulaire: Personne): void {
        this._titulaire = titulaire;
    }
    getTitulaire(): Personne {
        return this._titulaire;
    }

    // Méthodes pour le retrait et le dépôt
    Retrait(montant: number): boolean {
        if (montant <= 0) {
            console.log("Le montant du retrait doit être positif.");
            return false;
        }
        if (this._solde - montant < -this._ligneDeCredit) {
            console.log("Fonds insuffisants. Le retrait dépasse la ligne de crédit.");
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


