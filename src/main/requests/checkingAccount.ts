import { httpRouterAdapter } from "@config/adapters/httpRouter";
import { buildCheckingAccountController } from "@config/factories/controllers/getCheckingAccountController";

const getCheckingAccount = httpRouterAdapter(buildCheckingAccountController)

export {
    getCheckingAccount
}