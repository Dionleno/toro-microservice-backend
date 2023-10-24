import { IGetCheckingAccountUseCase } from "@applications/usecase/accounts/ports/checkingAccount";
import { HttpProxy, IController } from "./ports/controller";
import { HttpResponse, serverError, success } from "../utils/httpHelper";

export class CheckingAccountController implements IController {
    constructor(private getCheckingAccountUseCase: IGetCheckingAccountUseCase) {}

    async execute(event: HttpProxy): Promise<HttpResponse> {
        try {
            const response = await this.getCheckingAccountUseCase.execute(10)
            return success(response)
        } catch (error) {
            return serverError(error)
        }
    }
}