export type ActionData = {
    symbol: string;
    amount: number,
    current_price: number
}

export type AccountData = {
    account: string;
    checking_account_amount: number;
    positions: Array<ActionData>;
}


export interface ICheckingAccountRepository {
    setBalance(account_id: number, value: number): void
    getAccount(account_id: number): Promise<AccountData> 
}
  
