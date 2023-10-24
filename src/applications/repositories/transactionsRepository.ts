export interface ITransactionsRepository {
    transaction(account_id: number, value: number, transaction_type: number): void
}
  