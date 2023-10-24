export default interface IException extends Error {
    statusCode: number
    errors?: Error[]
  }
  