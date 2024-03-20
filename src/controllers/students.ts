import { Request, Response } from 'express'
import { HttpResponse } from '../utils/httpResponse'
import { Student } from './../entities/student'
import { validateData } from '../utils/shared'
import { createStudent } from '../utils/student'
import { StudentService } from '../services/student'

export class StudentController {
  private readonly httpResponse = new HttpResponse()
  private readonly stundetServive = new StudentService()

  getAll = async (_req: Request, res: Response) => {
    try {
      const students: Student[] = await this.stundetServive.getAll()
      if (students.length === 0) {
        return this.httpResponse.NotFound(res, 'No students found')
      }
      return this.httpResponse.Ok(res, students)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }

  getById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const student: Student | null = await this.stundetServive.getById(id)
      if (!student) return this.httpResponse.NotFound(res, 'No student found')
      return this.httpResponse.Ok(res, student)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }

  getByDni = async (req: Request, res: Response) => {
    const { dni } = req.params
    try {
      const student: Student | null = await this.stundetServive.getByDni(dni)
      if (!student) return this.httpResponse.NotFound(res, 'No student found')
      return this.httpResponse.Ok(res, student)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }

  createStudent = async (req: Request, res: Response) => {
    const { user, ...rest } = req.body
    const studentData = createStudent(rest)
    if (!validateData(rest, studentData))
      return this.httpResponse.BadRequest(res, 'Invalid data')
    const studentExist = await this.stundetServive.userExists(
      studentData.dni,
      studentData.email
    )
    if (studentExist)
      return this.httpResponse.BadRequest(
        res,
        'The dni and/or e-mail already exist'
      )
    try {
      const newStudent = await this.stundetServive.createStundet(studentData)
      return this.httpResponse.Ok(res, newStudent)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }

  // getNumberPerClass = async (req: Request, res: Response) => {
  //   const { classId } = req.params
  //   try {
  //     const count: number = await this.studentModel.getNumberPerClass(classId)
  //     return this.httpResponse.Ok(res, count)
  //   } catch (error) {
  //     return this.httpResponse.InternalServerError(res, 'No data')
  //   }
  // }
}
