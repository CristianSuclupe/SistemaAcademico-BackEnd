import { Request, Response } from 'express'
import { HttpResponse } from '../utils/httpResponse'
import { RegistrationService } from '../services/registration'
import { createRegistration } from '../utils/registration'
import { isValidGuid, validateData } from '../utils/shared'

export class RegistrationController {
  private readonly httpResponse = new HttpResponse()
  private readonly registrationService = new RegistrationService()

  createRegistration = async (req: Request, res: Response) => {
    const { user, ...rest } = req.body
    try {
      const registrationData = await createRegistration(rest)
      if (!registrationData || !validateData(rest, registrationData))
        return this.httpResponse.BadRequest(res, 'Invalid data')
      const registration = await this.registrationService.createRegistration(
        registrationData
      )
      return this.httpResponse.Ok(res, registration)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }

  getAllStudensPerClass = async (req: Request, res: Response) => {
    const { classId } = req.params
    console.log(classId)
    if (!isValidGuid(classId))
      return this.httpResponse.BadRequest(res, 'No class found')
    try {
      const result = await this.registrationService.getAllStudensPerClass(
        classId
      )
      if (!result) return this.httpResponse.NotFound(res, 'No found')
      console.log(result)
      return this.httpResponse.Ok(res, result)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }
}
