import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Student } from './student'
import { Class } from './class'
import { Secretary } from './secretary'

@Entity()
export class Registration extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Student, (student) => student.registration)
  student: Student

  @ManyToOne(() => Class, (classAux) => classAux.registration)
  class: Class

  @ManyToOne(() => Secretary, (secretary) => secretary.registration)
  secretary: Secretary

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
