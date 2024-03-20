import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Class } from './class'

@Entity()
export class Calendar extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  date: Date

  @Column()
  event: string

  @ManyToOne(() => Class, (classAux) => classAux.calendar)
  class: Class
}
