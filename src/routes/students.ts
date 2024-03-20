import { Router } from 'express'
import { StudentController } from '../controllers/students'

import { AuthMiddleware } from '../middlewares/auth'

export const createStudentRouter = () => {
  const authMiddleware = new AuthMiddleware()
  const router = Router()
  const studentController = new StudentController()

  router.get(
    '/',
    authMiddleware.auth(['teacher', 'secretary']),
    studentController.getAll
  )
  router.get(
    '/:id',
    authMiddleware.auth(['teacher', 'secretary']),
    studentController.getById
  )
  router.get(
    '/dni/:dni',
    authMiddleware.auth(['teacher', 'secretary']),
    studentController.getByDni
  )

  router.post(
    '/',
    authMiddleware.auth(['secretary']),
    studentController.createStudent
  )
  // router.get(
  //   '/classcount/:classId',
  //   authMiddleware.auth,
  //   studentController.getNumberPerClass
  // )
  return router
}
