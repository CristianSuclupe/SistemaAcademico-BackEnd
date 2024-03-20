import { DataSource } from 'typeorm'
import config from '../config'
import { Teacher } from '../entities/teacher'
import { Student } from '../entities/student'
import { Secretary } from '../entities/secretary'
import { Registration } from '../entities/registration'
import { RegisterNotes } from '../entities/registerNotes'
import { Course } from '../entities/course'
import { Class } from '../entities/class'
import { AcademicProduct } from '../entities/academicProduct'
import { Calendar } from '../entities/calendar'

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: config.server,
  port: config.dbPort,
  username: config.username,
  password: config.password,
  database: config.database,
  entities: [
    Teacher,
    Student,
    Secretary,
    Registration,
    RegisterNotes,
    Course,
    Class,
    AcademicProduct,
    Calendar
  ],
  synchronize: true,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
})
