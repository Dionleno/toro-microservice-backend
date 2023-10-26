import { actives, checking_account, clients } from ".prisma/client"
 
export type CheckingAccountWithActives = checking_account & {
    actives?: actives[]
}
export type ClientWithCheckingAccount = clients & {
    checking_account: Array<CheckingAccountWithActives>
}
export interface ICheckingAccountRepository {
    setBalance(account_id: number, value: number): void
    getAccountByEmail(email: string): Promise<CheckingAccountWithActives> 
}
  
