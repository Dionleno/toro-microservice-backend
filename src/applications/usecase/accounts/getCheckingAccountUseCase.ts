import { ICheckingAccountRepository } from "../../repositories/checkingAccountRepository"
import { CheckingAccountData, IGetCheckingAccountUseCase } from "./ports/checkingAccount"

export class GetCheckingAccountUseCase implements IGetCheckingAccountUseCase{ 
    constructor(private repository: ICheckingAccountRepository) {}
    async execute(email: string): Promise<CheckingAccountData>{ 
        const account = await this.repository.getAccountByEmail(email)

        const consolidated = account.actives.reduce((prev, current) => {
            prev += current.price * current.amount
            return prev
        }, 0)

        return {
            account: String(account.account).padStart(8, "0"),
            checkingAccountAmount: account.balance,
            positions: account.actives.map(a => ({
                amount: a.amount,
                symbol: a.code, 
                currentPrice: a.price
            })),
            consolidated
        }
    }
 
    
}