export interface IGetCheckingAccountUseCase {
    execute(account_id: number): Promise<any>
}