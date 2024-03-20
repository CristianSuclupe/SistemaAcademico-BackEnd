import { Column, Entity, OneToMany } from 'typeorm'
import { User } from './user'
import { Registration } from './registration'

@Entity()
export class Secretary extends User {
  @Column({ nullable: false })
  password: string

  @OneToMany(() => Registration, (registration) => registration.secretary)
  registration: Registration[]
}
