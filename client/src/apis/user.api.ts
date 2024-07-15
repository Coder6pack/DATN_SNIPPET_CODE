/* eslint-disable import/no-unresolved */
import { SuccessResponse } from '@/types/ultils.type'
import { User } from '@/types/user.type'
import http from '@/utils/http'

interface BodyUpdateProfile extends Omit<User, 'id' | 'email' | 'state' | 'role_id'> {
  password?: string
  newPassword?: string
}

const userApi = {
  getProfile() {
    return http.get<SuccessResponse<User>>('user/me')
  },
  updateProfile(body: BodyUpdateProfile) {
    return http.put<SuccessResponse<User>>('user/edit/me', body)
  },
  uploadAvatar(body: FormData) {
    return http.put<SuccessResponse<User>>('user/edit/me', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default userApi
