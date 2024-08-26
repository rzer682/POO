export interface ICustomer {
    readonly Solde: number | undefined

    depot(montant: number): void

    retrait(montant: number): void
}