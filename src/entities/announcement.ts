import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Class } from './class'

@Entity()
export class Announcement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  title: string

  @Column({ nullable: false })
  announcement: string

  @ManyToOne(() => Class, (classAux) => classAux.announcements)
  class: Class

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
