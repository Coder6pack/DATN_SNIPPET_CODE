/* eslint-disable import/no-unresolved */
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { Button } from '@/components/ui/button'
// eslint-disable-next-line import/no-unresolved
import { Input } from '@/components/ui/input'
// eslint-disable-next-line import/no-unresolved
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import path from '@/constants/path'
// import SnippetItem from '@/components/SnippetList/SnippetItem'

export default function Login() {
  return (
    <div className='mt-24'>
      <Card className='mx-auto max-w-sm shadow-md'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <Link to={path.forgotPassword} className='ml-auto inline-block text-sm underline'>
                  Forgot your password?
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
            <Button variant='outline' className='w-full'>
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
    </div>
  )
}