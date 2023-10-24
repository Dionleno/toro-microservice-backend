import dotenv from 'dotenv-flow'

const integrationAuthorizer = async (event, context, callback) => {
  dotenv.config({ silent: true })

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const result = await require('./src/main/requests/authorization').handler(event, context, callback)

    if (result) {
      return result
    }
  } catch (error) {
    throw Error('Authorizer error')
  }
}

module.exports = { integrationAuthorizer }