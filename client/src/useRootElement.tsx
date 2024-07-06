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
import Users from './pages/User/List/Users'
import Snippets from './pages/User/List/Snippets'
import Tags from './pages/User/List/Tags'

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
          element: <UserLayout />,
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
          element: <UserLayout />,
          children: [
            {
              path: path.dashboardUser,
              element: <Users />
            },
            {
              path: path.dashboardSnippet,
              element: <Snippets />
            },
            {
              path: path.dashboardTag,
              element: <Tags />
            }
          ]
        }
      ]
    }
  ])
  return rootElements
}
