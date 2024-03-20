import { Entity, OneToMany } from 'typeorm'
import { User } from './user'
import { Registration } from './registration'
import { RegisterNotes } from './registerNotes'

@Entity()
export class Student extends User {
  @OneToMany(() => Registration, (registration) => registration.student)
  registration: Registration[]

  @OneToMany(() => RegisterNotes, (registerNotes) => registerNotes.student)
  registerNotes: RegisterNotes[]
}
