export interface HttpResponse {
  statusCode: number;
  headers: { [key: string]: unknown };
  body: any;
}

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  headers,
  body: JSON.stringify(data),
});

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  headers,
  body: JSON.stringify(data),
});

export const badRequest = (data: any): HttpResponse => ({
  statusCode: 400,
  headers,
  body: JSON.stringify(data),
});

export const serverError = (data: any): HttpResponse => ({
  statusCode: 500,
  headers,
  body: JSON.stringify(data),
});
