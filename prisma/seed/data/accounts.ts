import { checking_account } from ".prisma/client";

export const AccountMock = [
  {
    id: 1,
    account: 1,
    balance: 10,
    clients_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    account: 2,
    balance: 20,
    clients_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
] as Array<checking_account>;
