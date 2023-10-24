import { APIGatewayAuthorizerEvent, APIGatewayProxyCallback, Context } from "aws-lambda" 

 
export async function handler(event: any, context: Context, callback: APIGatewayProxyCallback) {
  try { 
    const authorizationHeader = event.headers['Authorization']
 
    if (!authorizationHeader) callback('Unauthorized')

    const token = authorizationHeader.split(' ')[1] 

    const authResponse = buildAllowAllPolicy(event, context, token)
    callback(null, authResponse)
  } catch (error) { 
    callback('Unauthorized')
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildAllowAllPolicy(event: APIGatewayAuthorizerEvent, context: any, AllowAccess) {
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
    context: {}
  }

  return policy
}