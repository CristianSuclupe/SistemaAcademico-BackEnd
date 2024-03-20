import { Student } from '../entities/student'

export const createStudent = (dataUser: Student) => {
  const student = new Student()
  student.name = dataUser.name
  student.surname = dataUser.surname
  student.email = dataUser.email
  student.cellPhone = dataUser.cellPhone
  student.genre = dataUser.genre
  student.dateOfBirth = dataUser.dateOfBirth
  student.dni = dataUser.dni
  student.rol = 'student'
  return student
}
