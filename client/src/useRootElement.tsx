import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constants/path'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import WriteSnippet from './pages/WriteSnippet'
import SnippetDetail from './pages/SnippetDetail'
import UserLayout from './pages/User/Layouts/UserLayout'
import Profile from './pages/User/Profile'
import ManagerSnippet from './pages/User/ManagerSnippet'

function ProtectedRoutes() {
  const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
export default function useRootElement() {
  const rootElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoutes />,
      children: [
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        },
        {
          path: path.writeSnippet,
          element: (
            <MainLayout>
              <WriteSnippet />
            </MainLayout>
          )
        },
        {
          path: path.snippetDetail,
          element: (
            <MainLayout>
              <SnippetDetail />
            </MainLayout>
          )
        },
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <UserLayout />
            </MainLayout>
          ),
          children: [
            {
              path: path.profile,
              element: <Profile />
            },
            {
              path: path.managerSnippet,
              element: <ManagerSnippet />
            }
          ]
        },
        {
          path: path.dashboard,
          element: <UserLayout />
        }
      ]
    }
  ])
  return rootElements
}
