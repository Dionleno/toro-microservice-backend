import { GetCheckingAccountUseCase } from "@applications/usecase/accounts/getCheckingAccountUseCase"
import { IGetCheckingAccountUseCase } from "@applications/usecase/accounts/ports/checkingAccount"
import { CheckingAccountController } from "@controllers/getCheckingAccountController"
import { CheckingAccountRepository } from "../../databases/checkingAccountRepository"
 
export async function buildCheckingAccountController(): Promise<CheckingAccountController> {
    const checkingAccountRepository = new CheckingAccountRepository()
    const findOrderUseCase: IGetCheckingAccountUseCase = new GetCheckingAccountUseCase(checkingAccountRepository)
    return new CheckingAccountController(findOrderUseCase)
}
  