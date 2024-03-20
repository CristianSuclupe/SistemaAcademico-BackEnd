import { Registration } from '../entities/registration'

export const createRegistration = async (registrationData: Registration) => {
  const registration = new Registration()
  registration.student = registrationData.student
  registration.class = registrationData.class
  registration.secretary = registrationData.secretary
  return registration
}
