import { DataSource } from "typeorm";
import config from "../config";
import { Teacher } from "../entities/teacher";
import { Student } from "../entities/student";
import { Secretary } from "../entities/secretary";
import { Registration } from "../entities/registration";
import { RegisterNotes } from "../entities/registerNotes";
import { Course } from "../entities/course";
import { Class } from "../entities/class";
import { AcademicProduct } from "../entities/academicProduct";
import { Calendar } from "../entities/calendar";
import { Announcement } from "../entities/announcement";
import { Archive } from "../entities/archive";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.urlDb,
  entities: [
    Teacher,
    Student,
    Secretary,
    Registration,
    RegisterNotes,
    Course,
    Class,
    AcademicProduct,
    Calendar,
    Announcement,
    Archive,
  ],
  synchronize: true,
});
