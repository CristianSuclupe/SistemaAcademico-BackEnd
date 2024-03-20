import { Request, Response } from 'express'
import { HttpResponse } from '../utils/httpResponse'
import { Secretary } from '../entities/secretary'
import { SecretaryService } from '../services/secretary'

export class SecretaryController {
  private readonly httpResponse = new HttpResponse()
  private readonly secretaryService = new SecretaryService()

  getAll = async (_req: Request, res: Response) => {
    try {
      const secretarys: Secretary[] = await this.secretaryService.getAll()
      if (secretarys.length === 0)
        return this.httpResponse.NotFound(res, 'No secretarys found')
      return this.httpResponse.Ok(res, secretarys)
    } catch (error) {
      return this.httpResponse.InternalServerError(res, 'No data')
    }
  }
}
