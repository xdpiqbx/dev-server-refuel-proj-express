// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

/*
  Informational responses (100–199)
  Successful responses    (200–299)
  Redirection messages    (300–399)
  Client error responses  (400–499)
  Server error responses  (500–599)
*/

const httpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
};

module.exports = httpStatus;
