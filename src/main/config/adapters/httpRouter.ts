 
import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { HttpProxy, IController } from '@controllers/ports/controller'

export const httpRouterAdapter = (controllerFactory: () => Promise<IController>) => {
  return async (event: APIGatewayProxyEvent, context: Context) => {
    const { authorizer } = event.requestContext
    context.callbackWaitsForEmptyEventLoop = false

    const eventProps: HttpProxy = {
      ...event,
      decodeToken: "",
    }

    const controller = await controllerFactory()
    return controller.execute(eventProps)
  }
}
