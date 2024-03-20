import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { AcademicProduct } from './academicProduct'
import { Class } from './class'
import { Student } from './student'

@Entity()
export class RegisterNotes extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  score: number

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(
    () => AcademicProduct,
    (academicProduct) => academicProduct.registerNotes
  )
  academicProduct: AcademicProduct

  @ManyToOne(() => Class, (classAux) => classAux.registerNotes)
  class: Class

  @ManyToOne(() => Student, (student) => student.registerNotes)
  student: Student

  @UpdateDateColumn()
  updatedAt: Date
}
