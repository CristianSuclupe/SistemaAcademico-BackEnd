import { Student } from '../entities/student'

export class StudentService {
  getAll = async (): Promise<Student[]> => {
    return await Student.find()
  }

  getById = async (id: string): Promise<Student | null> => {
    return await Student.findOneBy({ id: id })
  }

  getByDni = async (dni: string): Promise<Student | null> => {
    return await Student.findOneBy({ dni: dni })
  }

  userExists = async (dni: string, email: string): Promise<Student | null> => {
    return await Student.findOne({
      where: [{ dni: dni }, { email: email }]
    })
  }

  createStundet = async (student: Student): Promise<Student> => {
    return await Student.save(student)
  }
}
