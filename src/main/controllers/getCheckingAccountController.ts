import { IGetCheckingAccountUseCase } from "@applications/usecase/accounts/ports/checkingAccount";
import { HttpProxy, IController } from "./ports/controller";
import { HttpResponse, serverError, success } from "../utils/httpHelper";

export class CheckingAccountController implements IController {
    constructor(private getCheckingAccountUseCase: IGetCheckingAccountUseCase) {}

    async execute(event: HttpProxy): Promise<HttpResponse> {
        try {
            if(!event.decodeToken) throw new Error("Client unauthorize");
            const claim = JSON.parse(event.decodeToken)
            const response = await this.getCheckingAccountUseCase.execute(claim.email)
            return success(response)
        } catch (error) { 
            return serverError(error)
        }
    }
}