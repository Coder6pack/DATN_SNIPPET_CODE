/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import DateSelect from '../components/DateSelect'
// import Button from 'src/components/Button'
// import { useMutation, useQuery } from '@tanstack/react-query'
// import userApi from 'src/apis/user.api'
// import { userSchema, UserSchema } from 'src/utils/rules'
// import { Controller, useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import InputNumber from 'src/components/InputNumber'
// import { useContext, useEffect, useMemo, useState } from 'react'
// import { toast } from 'react-toastify'
// import { AppContext } from 'src/contexts/app.context'
// import { setProfileToLS } from 'src/utils/auth'
// import { getAvatarUrl, isAxiosUnprocessableEntityError } from 'src/utils/utils'
// import { ErrorResponse } from 'src/types/ultils.type'
// import InputFile from 'src/components/InputFile'

import userApi from '@/apis/user.api'
import Input from '@/components/Input'
import InputFile from '@/components/InputFile'
import InputNumber from '@/components/InputNumber'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AppContext } from '@/contexts/app.context'
import { userSchema, UserSchema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

type FormData = Pick<UserSchema, 'name' | 'phone' | 'job' | 'profile' | 'avatar'>

const profileSchema = userSchema.pick(['name', 'phone', 'job', 'profile', 'avatar'])

export default function Profile() {
  const { setProfile } = useContext(AppContext)
  const [file, setFile] = useState<File>()
  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const uploadAvatarMutation = useMutation({
    mutationFn: userApi.uploadAvatar
  })
  const {
    register,
    control,
    formState: { errors }
    // handleSubmit,
    // setValue,
    // watch,
    // setError
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      profile: '',
      job: '',
      avatar: ''
    },
    resolver: yupResolver(profileSchema)
  })

  const { data: profileData } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userApi.getProfile()
  })
  const profile = profileData?.data.data
  console.log(profile)
  const updateProfileMutation = useMutation({
    mutationFn: userApi.updateProfile
  })

  return (
    <div className='rounded-sm bg-white px-2 md:px-7 pb-10 md:pb-20 shadow'>
      <div className='border-b border-gray-200 pb-20 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Hồ Sơ Của Tôi</h1>
        <div className='mt-1 text-sm text-gray-700'>Quan Ly Thong Tin Ho So De Bao Mat Tao Khoan</div>
      </div>
      <form className='mt-8 flex flex-col-reverse md:flex-row md:items-start'>
        <div className='mt-6 flex-grow md:pr-12 md:mt-0'>
          <div className='flex flex-col sm:flex-row flex-wrap'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Email</div>
            <div className='w-[80%] pl-5'>
              <div className='pt-3 text-gray-700'>Lorem ipsum dolor sit</div>
            </div>
          </div>
          <div className='mt-6 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Tên</div>
            <div className='w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                // register={register}
                name='name'
                placeholder='Tên'
                // errorMessage={errors.name?.message}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Số Điện Thoại</div>
            <div className='w-[80%] pl-5'>
              <Controller
                control={control}
                name='phone'
                render={({ field }) => {
                  return (
                    <InputNumber
                      type='number'
                      classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                      placeholder='Số điện thoại'
                      errorMessage={errors.phone?.message}
                      {...field}
                      onChange={field.onChange}
                    />
                  )
                }}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Thông tin</div>
            <div className='w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                name='address'
                placeholder='Địa chỉ'
                errorMessage={errors.name?.message}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Công việc</div>
            <div className='w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                name='address'
                placeholder='Địa chỉ'
                errorMessage={errors.name?.message}
              />
            </div>
          </div>

          <div className='mt-4 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize' />
            <div className='w-[80%] pl-5'>
              <Button>Save</Button>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:w-72 md:border-l md:border-l-gray-300'>
          <div className='flex flex-col items-center'>
            <div className='my-5 h-24 w-24'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <InputFile />
            <div className='mt-3 text-gray-600'>
              <div>Dung luong toi da 1MB</div>
              <div>Dinh dang: .JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
