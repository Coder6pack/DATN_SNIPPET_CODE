import { useRoutes } from 'react-router-dom'
import path from './constants/path'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'

export default function useRootElement() {
  const rootElements = useRoutes([
    {
      path: '',
      index: true,
      element: ''
    },
    {
      path: '',
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return rootElements
}
