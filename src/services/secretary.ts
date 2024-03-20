import { Secretary } from './../entities/secretary'

export class SecretaryService {
  getAll = async (): Promise<Secretary[]> => {
    return await Secretary.find()
  }
}
