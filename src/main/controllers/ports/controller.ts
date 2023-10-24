import { APIGatewayProxyEvent } from 'aws-lambda'

export type HttpProxy = APIGatewayProxyEvent & {
  decodeToken: any
}
 
export interface IController {
    execute(event: HttpProxy): Promise<any>
}