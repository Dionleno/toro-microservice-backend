import { GetCheckingAccountUseCase } from "@applications/usecase/accounts/getCheckingAccountUseCase"
import { IGetCheckingAccountUseCase } from "@applications/usecase/accounts/ports/checkingAccount"
import { CheckingAccountController } from "@controllers/getCheckingAccountController"
import { CheckingAccountRepository } from "@repository/prisma/checkingAccountRepository"
import { buildPrismaClient } from "../prismaClient"
 
export async function buildCheckingAccountController(): Promise<CheckingAccountController> {
    const prismaClient = await buildPrismaClient()
    const checkingAccountRepository = new CheckingAccountRepository(prismaClient)  
    const findOrderUseCase: IGetCheckingAccountUseCase = new GetCheckingAccountUseCase(checkingAccountRepository)
    return new CheckingAccountController(findOrderUseCase)
}
  