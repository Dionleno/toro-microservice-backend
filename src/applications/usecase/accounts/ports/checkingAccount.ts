export type PositionsData = {
  amount: number;
  symbol: string;
  currentPrice: number;
};
export type CheckingAccountData = {
  account: string;
  checkingAccountAmount: number;
  positions: Array<PositionsData>;
  consolidated: number;
};
export interface IGetCheckingAccountUseCase {
  execute(email: string): Promise<CheckingAccountData>;
}
