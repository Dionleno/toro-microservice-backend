import { APIGatewayAuthorizerEvent, Context } from "aws-lambda" 
import jwt_decode from "jwt-decode";
 
export async function handler(event: any, context: Context, callback: any) {
  try { 

    const authorizationHeader = event.headers['Authorization'] 
    if (!authorizationHeader) callback('Unauthorized')

    const token = authorizationHeader.split(' ')[1] 
    const authResponse = buildAllowAllPolicy(event, context, jwt_decode(token))

    callback(null, authResponse)
  } catch (error) { 
    callback('Unauthorized')
  }
}
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildAllowAllPolicy(event: APIGatewayAuthorizerEvent, context: any, token) {
  var tmp = event.methodArn.split(':')
  var apiGatewayArnTmp = tmp[5].split('/')
  var awsAccountId = tmp[4]
  var awsRegion = tmp[3]
  var restApiId = apiGatewayArnTmp[0]
  var stage = apiGatewayArnTmp[1]
  var apiArn = `arn:aws:execute-api:${awsRegion}:${awsAccountId}:${restApiId}/${stage}/*/*`

  const policy = {
    principalId: context.awsRequestId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: [apiArn]
        },
      ],
    },
    context: {
      authorizer: JSON.stringify(token)
    }
  } 

  return policy
}