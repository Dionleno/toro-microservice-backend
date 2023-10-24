import { ActiveEntity } from "./actionEntity";

export type AccountEntity = {
  checkingAccountAmount: number;
  positions: Array<ActiveEntity>;
  consolidated: number;
};
