import { ICustomer } from "./ICustomer";
import { Personne } from "../models/personne";


export interface IBanker extends ICustomer {
    readonly titulaire : Personne | undefined
    readonly numero : string 

    AppliquerInteret(): void

}