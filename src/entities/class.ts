import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Teacher } from './teacher'
import { Course } from './course'
import { AcademicProduct } from './academicProduct'
import { Registration } from './registration'
import { RegisterNotes } from './registerNotes'
import { Calendar } from './calendar'

@Entity()
export class Class extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false, default: true })
  state: boolean

  @Column({ nullable: false })
  currentAmount: number

  @Column({ nullable: false })
  maximumCapacity: number

  @Column({ nullable: false })
  deadLine: Date

  @ManyToOne(() => Teacher, (teacher) => teacher.classes)
  teacher: Teacher

  @ManyToOne(() => Course, (course) => course.classes)
  course: Course

  @OneToMany(() => AcademicProduct, (academicProduct) => academicProduct.class)
  academicProduct: AcademicProduct[]

  @OneToMany(() => Registration, (registration) => registration.class)
  registration: Registration[]

  @OneToMany(() => RegisterNotes, (registerNotes) => registerNotes.class)
  registerNotes: RegisterNotes[]

  @Column({ nullable: false })
  schedule: Date

  @OneToMany(() => Calendar, (calendar) => calendar.class)
  calendar: Calendar[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
