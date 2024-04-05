import { Registration } from "../entities/registration";

export class RegistrationService {
  createRegistration = async (
    registration: Registration
  ): Promise<Registration> => {
    return await Registration.save(registration);
  };

  getAllStudensPerClass = async (classId: string): Promise<any> => {
    try {
      const students = await Registration.getRepository()
        .createQueryBuilder("registration")
        .leftJoinAndSelect("registration.student", "student")
        .where("registration.classId = :classId", { classId })
        .select("student.id, student.name, student.surname, student.dni")
        .orderBy("student.surname", "ASC")
        .getRawMany();
      return {
        students: students,
      };
    } catch (error) {
      return null;
    }
  };
}
