import { expect, test, describe } from "vitest";
import { AccountEntity } from "../../entities/accountEntity";
import { AccountSuccess } from "tests/data/accounts";
import {
  AccountData,
  ICheckingAccountRepository,
} from "../../repositories/checkingAccountRepository";
import { GetCheckingAccountUseCase } from "./getCheckingAccountUseCase";

export class CheckingAccountRepositoryStub
  implements ICheckingAccountRepository
{
  setBalance(account_id: number, value: number): void {}
  async getAccount(account_id: number): Promise<AccountData> {
    return AccountSuccess;
  }
}

describe("[UseCase] getCheckingAccountUseCase", () => {
  test("should return the customer's account", async () => {
    const getCheckingAccount = new GetCheckingAccountUseCase(
      new CheckingAccountRepositoryStub()
    );
    const account: AccountEntity = await getCheckingAccount.execute(10);

    const consolidated = account.positions.reduce((prev, current) => {
        prev += current.currentPrice * current.amount
        return prev
    }, 0)

    expect(account.consolidated).toEqual(consolidated)
    expect(account.checkingAccountAmount).toBeTypeOf("string");
    expect(account.positions).toBeInstanceOf(Array);
    expect(account.checkingAccountAmount).toBeTypeOf("number");
    expect(account.consolidated).toBeTypeOf("number");
  });
});

test("[UseCase] should get Checking Account data", async () => {
  // buscar informaçoes da conta
  const data = {
    userId: 1,
  };
  //new AccountRepository(new Database())
  const getCheckingAccount = new GetCheckingAccountUseCase(
    new CheckingAccountRepositoryStub()
  );
  const account: AccountEntity = await getCheckingAccount.execute(10);

  expect(account.positions).toBeInstanceOf(Array);
  expect(account.checkingAccountAmount).toBeTypeOf("number");
  expect(account.consolidated).toBeTypeOf("number");
});

test("[UseCase] should consolidated calc", async () => {
  // buscar informaçoes da conta
  const data = {
    userId: 1,
  };

  const getCheckingAccount = new GetCheckingAccountUseCase(
    new CheckingAccountRepositoryStub()
  );
  const account: AccountEntity = await getCheckingAccount.execute(10);

  const consolidated = account.positions.reduce((prev, current) => {
    prev += current.currentPrice * current.amount;
    return prev;
  }, 0);

  expect(account.consolidated).toBe(consolidated);
});
