/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { Button } from '@/components/ui/button'
// eslint-disable-next-line import/no-unresolved
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// eslint-disable-next-line import/no-unresolved
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import path from '@/constants/path'
import { schema, Schema } from '@/utils/rules'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from '@/apis/auth.api'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'
import { isAxiosUnprocessableEntityError } from '@/utils/utils'
import { omit } from 'lodash'
import { ErrorResponse } from '@/types/ultils.type'
import Input from '@/components/Input'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])
export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })
  // Goi useContext cua Authenticated
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  // Khai bao navigate
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    // dung lodash de omit 'confirm_password' han che gui tat ca key len server
    const body = omit(data, ['confirm_password'])

    // goi ham de mutate data trong form register
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate(path.home)
      },

      // handle loi 422
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data

          if (formError) {
            // dung Object de tao vong lap cac key trong form error
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div className='mt-12'>
      <form onSubmit={onSubmit}>
        <Card className='mx-auto max-w-sm shadow shadow-md'>
          <CardHeader>
            <CardTitle className='text-2xl text-center'>Sign Up</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  placeholder='m@example.com'
                  register={register}
                  errorMessage={errors.email?.message}
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  register={register}
                  errorMessage={errors.password?.message}
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='confirm_password'>Confirm password</Label>
                <Input
                  type='password'
                  name='confirm_password'
                  placeholder='Confirm your password'
                  register={register}
                  errorMessage={errors.confirm_password?.message}
                />
              </div>
              <Button type='submit' className='w-full'>
                Create an account
              </Button>
              <Button variant='outline' className='w-full'>
                Sign up with GitHub
              </Button>
            </div>
            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <Link to={path.login} className='underline'>
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
