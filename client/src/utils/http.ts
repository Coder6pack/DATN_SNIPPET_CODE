/* eslint-disable import/no-unresolved */
import axios, { AxiosError, AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from './auth'
import { AuthResponse } from '@/types/auth.type'
import path from '@/constants/path'
import HttpStatusCode from '@/constants/HttpStatusCode.enum'
class Http {
  instance: AxiosInstance
  private access_token: string
  constructor() {
    this.access_token = getAccessTokenFromLS()
    ;(this.instance = axios.create({
      baseURL: 'http://localhost:8000/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })),
      this.instance.interceptors.request.use(
        (config) => {
          if (this.access_token && config.headers) {
            config.headers.authorization = this.access_token
            return config
          }
          return config
        },
        (error) => {
          return Promise.reject(error)
        }
      )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === path.login || url === path.register) {
          const data = response.data as AuthResponse
          this.access_token = data.data.access_token

          setAccessTokenToLS(this.access_token)
          setProfileToLS(data.data.user)
        } else if (url === path.logout) {
          this.access_token = ''
          clearLS()
        }
        return response
      },
      function (error: AxiosError) {
        // check loi neu response tra ve
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          // dung de toast thong bao error
          toast.error(message)
        }
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          clearLS()
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
