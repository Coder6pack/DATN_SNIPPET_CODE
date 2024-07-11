// khai bao type User
export interface User {
  id: string
  name?: string
  email: string
  phone?: string
  job?: string
  state: string
  role_id: string
  date_of_birth?: string // ISO 8601
  img_id?: string
  profile?: string
  createdAt: string
  updatedAt: string
}
