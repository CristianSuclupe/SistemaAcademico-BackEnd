import bcrypt from 'bcrypt'
import { Teacher } from '../entities/teacher'
import { Secretary } from '../entities/secretary'

export const isValidGuid = (guid: any): boolean => {
  const guidRegex =
    /^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/
  return guidRegex.test(guid)
}

export const getRol = (type: string) => {
  if (type === 'Profesor') return 'teacher'
  if (type === 'Secretario académico') return 'secretary'
  return null
}

export const validatePassword = async (
  password: string,
  passwordEncrypted: string
) => {
  const passwordDecrypted = await bcrypt.compareSync(
    password,
    passwordEncrypted
  )
  return passwordDecrypted
}

export const findUser = async (userType: string, user: string) => {
  const rol = userType.toLowerCase()
  if (rol === 'profesor')
    return await Teacher.findOne({
      where: [{ email: user }, { dni: user }]
    })
  else if (rol === 'secretario académico')
    return await Secretary.findOne({
      where: [{ email: user }, { dni: user }]
    })
  return null
}

export const validateData = (dataUser: any, dataModel: any) => {
  const { rol, ...rest } = dataModel
  const propsDataModel = Object.keys(rest).sort()
  const propsDataUser = Object.keys(dataUser).sort()
  if (JSON.stringify(propsDataModel) !== JSON.stringify(propsDataUser))
    return false
  for (const prop in dataUser) {
    let text = dataUser[prop].trim()
    if (dataUser[prop] === null || text === '') return false
  }
  return true
}
