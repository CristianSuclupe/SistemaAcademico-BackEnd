import { Class } from '../entities/class'

export class ClassService {
  getAll = async (): Promise<Class[]> => {
    return await Class.getRepository()
      .createQueryBuilder('class')
      .leftJoinAndSelect('class.teacher', 'teacher')
      .leftJoinAndSelect('class.course', 'course')
      .getMany()
  }

  getById = async (classId: string): Promise<Class | null> => {
    return await Class.getRepository()
      .createQueryBuilder('class')
      .leftJoinAndSelect('class.teacher', 'teacher')
      .leftJoinAndSelect('class.course', 'course')
      .where('class.id = :classId', { classId })
      .getOne()
  }

  getByTeacher = async (teacherId: string): Promise<Class[]> => {
    return await Class.getRepository()
      .createQueryBuilder('class')
      .leftJoinAndSelect('class.course', 'course')
      .where('class.teacherId = :teacherId', { teacherId })
      .getMany()
  }
}
