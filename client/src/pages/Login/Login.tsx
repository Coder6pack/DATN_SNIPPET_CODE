/* eslint-disable import/no-unresolved */
import { Link, useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { Button } from '@/components/ui/button'
// eslint-disable-next-line import/no-unresolved
// import { Input } from '@/components/ui/input'
// eslint-disable-next-line import/no-unresolved
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import path from '@/constants/path'
import { schema, Schema } from '@/utils/rules'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from '@/apis/auth.api'
import { isAxiosUnprocessableEntityError } from '@/utils/utils'
import { ErrorResponse } from '@/types/ultils.type'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'
import Input from '@/components/Input'

// import SnippetItem from '@/components/SnippetList/SnippetItem'

type FormData = Pick<Schema, 'email' | 'password'>

const loginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })
  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })

  // Goi useContext cua Authenticated
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  // Khai bao navigate
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    // goi ham de mutate data trong form register
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate(path.home)
      }, // handle loi 422
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data

          if (formError) {
            // dung Object de tao vong lap cac key trong form error
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div className='mt-24'>
      <form onSubmit={onSubmit}>
        <Card className='mx-auto max-w-sm shadow-md'>
          <CardHeader>
            <CardTitle className='text-2xl text-center'>Login</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                {/* <Input id='email' type='email' placeholder='m@example.com' required /> */}
                <Input
                  type='email'
                  name='email'
                  placeholder='m@example.com'
                  register={register}
                  errorMessage={errors.email?.message}
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <Link to={path.forgotPassword} className='ml-auto inline-block text-sm underline'>
                    Forgot your password?
                  </Link>
                </div>
                {/* <Input id='password' type='password' required /> */}
                <Input
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  register={register}
                  errorMessage={errors.password?.message}
                />
              </div>
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <Button variant='outline' className='w-full' type='submit'>
                Login with Google
              </Button>
            </div>
            <div className='mt-4 text-center text-sm'>
              Don&apos;t have an account?{' '}
              <Link to={path.register} className='underline'>
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
