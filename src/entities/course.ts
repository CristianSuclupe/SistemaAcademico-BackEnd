import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Class } from './class'

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ unique: true, nullable: false })
  name: string

  @OneToMany(() => Class, (classAux) => classAux.course)
  classes: Class[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
