export class Personne {
    private _nom: string;
    private _prenom: string;
    private _dateNaiss: Date;

    constructor(nom: string, prenom: string, dateNaiss: Date) {
        this._nom = nom;
        this._prenom = prenom;
        this._dateNaiss = dateNaiss;
    }

    set Nom(nom: string) {
        this._nom = nom;
    }

    get Nom(): string {
        return this._nom;
    }

    set Prenom(prenom: string) {
        this._prenom = prenom;
    }

    get Prenom(): string {
        return this._prenom;
    }

    set DateNaiss(dateNaiss: Date) {
        this._dateNaiss = dateNaiss;
    }

    get DateNaiss(): Date {
        return this._dateNaiss;
    }
}


