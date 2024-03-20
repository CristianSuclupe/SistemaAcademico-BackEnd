export interface IClassModel {
  getAll(): Promise<IClass[]>
  getById(classId: string): Promise<IClass | null>
  getByTeacher(teacherId: string): Promise<IClass[] | null>
}

export interface IClass {
  class_id: string
  state: boolean
  current_amount: number
  maximum_capacity: number
  dead_line: Date
  teacher_id: string
  course_id: number
}
