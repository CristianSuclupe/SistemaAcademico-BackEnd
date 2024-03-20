import { IUser } from './user'

export interface IUserPayload extends IUser {
  iat: number
  exp: number
}
