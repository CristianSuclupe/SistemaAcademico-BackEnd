import { Router } from 'express'
import { SecretaryController } from '../controllers/secretarys'
import { AuthMiddleware } from '../middlewares/auth'

export const createSecretaryRouter = () => {
  const authMiddleware = new AuthMiddleware()
  const router = Router()
  const secretaryController = new SecretaryController()

  router.get(
    '/',
    authMiddleware.auth(['secretary']),
    secretaryController.getAll
  )
  return router
}
