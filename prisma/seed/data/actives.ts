import { actives } from ".prisma/client";

export const ActivesMock = [
  {
    id: 1,
    amount: 1,
    code: "PETR4",
    price: 28.44,
    statusId: 1,
    checking_accountId: 1
  },
  {
    id: 2,
    amount: 1,
    code: "SANB11",
    price: 40.77,
    statusId: 1,
    checking_accountId: 1
  } ,
  {
    id: 3,
    amount: 1,
    code: "PETR4",
    price: 28.44,
    statusId: 1,
    checking_accountId: 2
  },
  {
    id: 4,
    amount: 1,
    code: "SANB11",
    price: 40.77,
    statusId: 1,
    checking_accountId: 2
  }   
] as Array<actives>;