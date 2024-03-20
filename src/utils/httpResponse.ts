import { Response } from 'express'
export enum HttpStatus {
  OK = 200,
  Bad_Request = 400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500
}

export class HttpResponse {
  Ok(res: Response, data?: any): Response {
    return res
      .status(HttpStatus.OK)
      .json({ status: HttpStatus.OK, statusMsg: 'Success', data: data })
  }
  BadRequest(res: Response, data?: any) {
    return res
      .status(HttpStatus.Bad_Request)
      .json({
        status: HttpStatus.Bad_Request,
        statusMsg: 'Bad request',
        error: data
      })
  }
  NotFound(res: Response, data?: any): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMsg: 'Not found',
      error: data
    })
  }
  Unauthorized(res: Response, data?: any): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMsg: 'Unauthorized',
      error: data
    })
  }
  Forbidden(res: Response, data?: any): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMsg: 'Forbidden',
      error: data
    })
  }
  InternalServerError(res: Response, data?: any): Response {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMsg: 'Internal Server Error',
      error: data
    })
  }
}
