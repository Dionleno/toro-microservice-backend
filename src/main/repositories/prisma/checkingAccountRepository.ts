import { PrismaClient } from "@prisma/client";
import {
  CheckingAccountWithActives,
  ClientWithCheckingAccount,
  ICheckingAccountRepository,
} from "@applications/repositories/checkingAccountRepository";

export class CheckingAccountRepository implements ICheckingAccountRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async setBalance(account_id: number, value: number): Promise<void> {
     await this.prismaClient.checking_account.update({
        where: {
            id: account_id
        },
        data: {
            balance: value,
            updated_at: new Date()
        }
    })
  }

  async getAccountByEmail(email: string): Promise<CheckingAccountWithActives> {
   const data = await this.prismaClient.clients.findFirstOrThrow({
      where: {
        email: email,
      },
      include: {
        checking_account: {
            include: {
                actives: true
            }
        },
      },
    }) as ClientWithCheckingAccount;

    return data.checking_account[0]
  }
}
