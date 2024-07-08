/* eslint-disable import/no-unresolved */
// import userImage from 'src/assets/images/user.svg'
import HttpStatusCode from '@/constants/HttpStatusCode.enum'
import axios, { AxiosError } from 'axios'

// tao ham de xu ly loi response tra ve
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

// tao ham xu li loi 422 response tra ve
export function isAxiosUnprocessableEntityError<FormData>(error: unknown): error is AxiosError<FormData> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

const removeSpecialCharacter = (str: string) => {
  // eslint-disable-next-line no-useless-escape
  return str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
}

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i.${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i.')
  return arr[arr.length - 1]
}

// export const getAvatarUrl = (avatarName?: string) => (avatarName ? `${config.baseUrl}images/${avatarName}` : userImage)
