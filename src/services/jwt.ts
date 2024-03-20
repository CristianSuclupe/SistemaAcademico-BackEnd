import jwt from 'jwt-simple'
import moment from 'moment'
import config from '../config'
import { IUserPayload } from '../types/userPayload'

export class JwtService {
  createToken = (user: any): string => {
    const payload: IUserPayload = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      cellPhone: user.cell_phone,
      genre: user.genre,
      dni: user.dni,
      rol: user.rol,
      iat: moment().unix(),
      exp: moment().add(1, 'days').unix()
    }

    return jwt.encode(payload, config.secret)
  }

  decodeToken = (token: string) => {
    return jwt.decode(token, config.secret)
  }
}

export default JwtService
