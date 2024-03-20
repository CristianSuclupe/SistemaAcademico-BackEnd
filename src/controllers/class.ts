import { Request, Response } from 'express'
import { HttpResponse } from '../utils/httpResponse'
import { Class } from '../entities/class'
import { ClassService } from './../services/class'
import { isValidGuid } from '../utils/shared'

export class ClassController {
  private readonly httpResponse = new HttpResponse()
  private readonly classService = new ClassService()

  getAll = async (_req: Request, res: Response) => {
    try {
      const classes: Class[] = await this.classService.getAll()
      if (classes.length === 0)
        return this.httpResponse.NotFound(res, 'No classes found')
      return this.httpResponse.Ok(res, classes)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }

  getById = async (req: Request, res: Response) => {
    const { classId } = req.params
    if (!isValidGuid(classId))
      return this.httpResponse.BadRequest(res, 'No classes found')
    try {
      const classFound: Class | null = await this.classService.getById(classId)
      if (!classFound) return this.httpResponse.NotFound(res, 'No class found')
      return this.httpResponse.Ok(res, classFound)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }

  getByTeacher = async (req: Request, res: Response) => {
    const { teacherId } = req.params
    if (!isValidGuid(teacherId))
      return this.httpResponse.BadRequest(res, 'No classes found')
    try {
      const classes: Class[] = await this.classService.getByTeacher(teacherId)
      if (!classes || classes.length === 0)
        return this.httpResponse.NotFound(res, 'No classes found')
      return this.httpResponse.Ok(res, classes)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }
}
