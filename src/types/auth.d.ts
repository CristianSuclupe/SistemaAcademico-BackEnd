export interface IAuthModel {
  login(user: any, user_type: string): Promise<any>
}
