import { Router } from 'express'
import { RegistrationController } from '../controllers/registration'
import { AuthMiddleware } from '../middlewares/auth'

export const createRegistrationRouter = () => {
  const authMiddleware = new AuthMiddleware()
  const router = Router()
  const registrationController = new RegistrationController()

  router.post(
    '/',
    authMiddleware.auth(['secretary']),
    registrationController.createRegistration
  )
  router.get(
    '/class/:classId',
    authMiddleware.auth(['teacher']),
    registrationController.getAllStudensPerClass
  )
  return router
}
