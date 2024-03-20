import { Column, Entity, OneToMany } from 'typeorm'
import { User } from './user'
import { Class } from './class'
import { Calendar } from './calendar'

@Entity()
export class Teacher extends User {
  @Column({ nullable: false })
  speciality: string

  @Column({ nullable: false })
  password: string

  @OneToMany(() => Class, (classAux) => classAux.teacher)
  classes: Class[]

  @OneToMany(() => Calendar, (calendar) => calendar.teacher)
  calendar: Calendar[]
}
