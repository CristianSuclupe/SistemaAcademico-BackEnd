import JwtService from '../services/jwt'
import moment from 'moment'
import { Request, Response, NextFunction } from 'express'
import { HttpResponse } from '../utils/httpResponse'
import { IUserPayload } from '../types/userPayload'

export class AuthMiddleware {
  private readonly jwtService = new JwtService()
  private readonly httpResponse = new HttpResponse()

  auth = (allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!req.headers.authorization) return this.httpResponse.Forbidden(res)
      const token = req.headers.authorization.replace(/['"]+/g, '')
      try {
        const payload: IUserPayload = this.jwtService.decodeToken(token)
        console.log(payload.exp, moment().unix())
        if (allowedRoles.includes(payload.rol)) {
          if (payload.exp <= moment().unix())
            return this.httpResponse.Unauthorized(res, 'Token expired')
          req.body.user = payload
          return next()
        } else return this.httpResponse.Unauthorized(res, 'Unauthorized role')
      } catch (error) {
        this.httpResponse.InternalServerError(res, 'No data')
      }
    }
  }
}
