import { Request, Response } from 'express'
import { HttpResponse } from '../utils/httpResponse'
import { findUser, validatePassword } from '../utils/shared'
import { JwtService } from './../services/jwt'

export class AuthController {
  private readonly httpResponse = new HttpResponse()
  private readonly jwtService = new JwtService()

  login = async (req: Request, res: Response) => {
    const { user, password, userType } = req.body
    if (!userType) return this.httpResponse.BadRequest(res, 'Invalid user type')
    try {
      const userSearched = await findUser(userType, user)
      const passwordSearched = userSearched
        ? await validatePassword(password, userSearched.password)
        : false
      if (!userSearched || !passwordSearched)
        return this.httpResponse.NotFound(res, 'Incorrect user or password')
      const token = this.jwtService.createToken(userSearched)
      return this.httpResponse.Ok(res, token)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }
}