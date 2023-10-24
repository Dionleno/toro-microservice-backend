
import { AccountEntity } from "../../entities/accountEntity"
import { ICheckingAccountRepository } from "../../repositories/checkingAccountRepository"
import { IGetCheckingAccountUseCase } from "./ports/checkingAccount"

export class GetCheckingAccountUseCase implements IGetCheckingAccountUseCase{ 
    constructor(private repository: ICheckingAccountRepository) {}
    async execute(account_id: number): Promise<AccountEntity> { 
        const response = await this.repository.getAccount(account_id)

        const consolidated = response.positions.reduce((prev, current) => {
            prev += current.current_price * current.amount
            return prev
        }, 0)

        return {
            checkingAccountAmount: response.checking_account_amount,
            positions: response.positions.map(a => ({
                amount: a.amount,
                symbol: a.symbol, 
                currentPrice: a.current_price
            })),
            consolidated
        }
    }
 
    
}