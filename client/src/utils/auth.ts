import { User } from 'src/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const setAccessTokenToLS = (access_token: string) => {
  console.log(access_token)
  localStorage.setItem('access_token', access_token)
}

export const clearLS = () => {
  const event = new Event('clearLS')
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
  LocalStorageEventTarget.dispatchEvent(event)
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  console.log(result)
  return result ? JSON.parse(result) : null
}

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
