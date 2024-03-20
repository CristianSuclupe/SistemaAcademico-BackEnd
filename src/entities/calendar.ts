import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Teacher } from './teacher'

@Entity()
export class Calendar extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  date: Date

  @Column()
  event: string

  @ManyToOne(() => Teacher, (teacher) => teacher.calendar)
  teacher: Teacher
}
