import { Router } from 'express'
import { ClassController } from '../controllers/class'
import { AuthMiddleware } from '../middlewares/auth'

export const createClassRouter = () => {
  const authMiddleware = new AuthMiddleware()
  const router = Router()
  const classController = new ClassController()

  router.get(
    '/',
    authMiddleware.auth(['secretary', 'teacher']),
    classController.getAll
  )
  router.get(
    '/:classId',
    authMiddleware.auth(['secretary', 'teacher']),
    classController.getById
  )
  router.get(
    '/teacher/:teacherId',
    authMiddleware.auth(['teacher']),
    classController.getByTeacher
  )

  return router
}
