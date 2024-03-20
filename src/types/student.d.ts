import { User } from '../entities/user'

export interface IStudentModel {
  getAll(): Promise<IStudent[]>
  getById(studentID: string): Promise<IStudent | null>
  getByDni(studentDni: string): Promise<IStudent | null>
  getByClass(classId: string): Promise<IStudent[]>
  createStudent(student: IStudent): Promise<IStudent>
  getNumberPerClass(classId: string): Promise<number>
  get()
}

export interface IStudent extends User {}
