import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

export abstract class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  surname: string

  @Column({ unique: true, nullable: false })
  email: string

  @Column({ nullable: false })
  cellPhone: string

  @Column({ nullable: false })
  genre: string

  @Column({ nullable: false })
  dateOfBirth: Date

  @Column({ unique: true, nullable: false })
  dni: string

  @Column({ nullable: false })
  rol: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
