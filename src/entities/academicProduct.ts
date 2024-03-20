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
import { Class } from './class'
import { RegisterNotes } from './registerNotes'

@Entity()
export class AcademicProduct extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  deadLine: Date

  @Column({ nullable: false })
  productName: string

  @Column({ nullable: false })
  percentage: number

  @ManyToOne(() => Class, (classAux) => classAux.academicProduct)
  class: Class

  @OneToMany(
    () => RegisterNotes,
    (registerNotes) => registerNotes.academicProduct
  )
  registerNotes: RegisterNotes[]

  @Column({ nullable: false })
  expirationDate: Date

  @Column({ default: true })
  state: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
