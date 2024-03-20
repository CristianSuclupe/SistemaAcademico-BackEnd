export interface IRegistrationModel {
  createRegistration(registration: IRegistration): Promise<IRegistration>
}

export interface IRegistration {
  id: string
  date: Date
  student_id: string
  class_id: string
  secretary_id: string
}
