// eslint-disable-next-line import/no-unresolved
import { Button } from '@/components/ui/button'
// eslint-disable-next-line import/no-unresolved
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// eslint-disable-next-line import/no-unresolved
import { Input } from '@/components/ui/input'
// eslint-disable-next-line import/no-unresolved
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import path from '@/constants/path'

export default function Register() {
  return (
    <div className='mt-12'>
      <Card className='mx-auto max-w-sm shadow shadow-md'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Sign Up</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' type='text' placeholder='Enter your name' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' placeholder='Enter your password' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='confirm_password'>Confirm password</Label>
              <Input id='confirm_password' type='password' placeholder='Confirm your password' />
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
    </div>
  )
}
