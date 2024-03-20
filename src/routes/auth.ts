import { Router } from 'express'
import { AuthController } from '../controllers/auth'

export const createAuthRouter = () => {
  const router = Router()
  const authController = new AuthController()

  router.post('/', authController.login)

  return router
}
