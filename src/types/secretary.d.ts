import { IUser } from './user'

export interface ISecretaryModel {
  getAll(): Promise<ISecretary[]>
}

export interface ISecretary extends Omit<IUser, 'id'> {
  secretary_id: string
  password: string
}
