/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */

import userApi from '@/apis/user.api'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputFile from '@/components/InputFile'
import InputNumber from '@/components/InputNumber'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AppContext } from '@/contexts/app.context'
import { ErrorResponse } from '@/types/ultils.type'
import { setProfileToLS } from '@/utils/auth'
import { userSchema, UserSchema } from '@/utils/rules'
import { getAvatarUrl, isAxiosUnprocessableEntityError } from '@/utils/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type FormData = Pick<UserSchema, 'name' | 'phone' | 'job' | 'profile' | 'img'>
type FormDataError = Omit<FormData, 'phone'> & {
  phone?: string
}
const profileSchema = userSchema.pick(['name', 'phone', 'job', 'profile', 'img'])

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
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    setError
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      profile: '',
      job: '',
      img: ''
    },
    resolver: yupResolver(profileSchema)
  })

  const { data: profileData, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userApi.getProfile()
  })
  const profile = profileData?.data.data

  // console.log(profile)

  const updateProfileMutation = useMutation({
    mutationFn: userApi.updateProfile
  })
  useEffect(() => {
    if (profile) {
      setValue('name', profile.name),
        setValue('phone', profile.phone),
        setValue('img', profile.img),
        setValue('profile', profile.profile),
        setValue('job', profile.job)
    }
  }, [profile, setValue])

  const avatar = watch('img')

  const onSubmit = async (data: FormData) => {
    try {
      let avatarName = avatar
      if (file) {
        const form = new FormData()
        form.append('image', file)
        const uploadRes = await uploadAvatarMutation.mutateAsync(form)
        avatarName = uploadRes.data.data.img
        console.log('avatarName: ' + uploadRes.data.data.img)
        setValue('img', avatarName)
      }
      const res = await updateProfileMutation.mutateAsync({ ...data })
      refetch()
      setProfile(res.data.data)
      setProfileToLS(res.data.data)
      toast.success(res.data.message)
    } catch (error) {
      if (isAxiosUnprocessableEntityError<ErrorResponse<FormDataError>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          // dung Object de tao vong lap cac key trong form error
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormDataError, {
              message: formError[key as keyof FormDataError],
              type: 'Server'
            })
          })
        }
      }
    }
  }
  const handleOnChange = (file?: File) => {
    setFile(file)
  }

  return (
    <div className='rounded-sm bg-white px-2 md:px-7 pb-10 md:pb-20 shadow'>
      <div className='border-b border-gray-200 pb-20 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Hồ Sơ Của Tôi</h1>
        <div className='mt-1 text-sm text-gray-700'>Quan Ly Thong Tin Ho So De Bao Mat Tao Khoan</div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, (err) => {
          console.log(err)
        })}
        className='mt-8 flex flex-col-reverse md:flex-row md:items-start'
      >
        <div className='mt-6 flex-grow md:pr-12 md:mt-0'>
          <div className='flex flex-col sm:flex-row flex-wrap'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Email</div>
            <div className='w-[80%] pl-5'>
              <div className='pt-3 text-gray-700'>{profile?.email}</div>
            </div>
          </div>
          <div className='mt-6 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Tên</div>
            <div className='w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                name='name'
                placeholder='Tên'
                errorMessage={errors.name?.message}
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
                name='profile'
                placeholder='Thông tin'
                errorMessage={errors.profile?.message}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Công việc</div>
            <div className='w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                name='job'
                placeholder='Công việc'
                errorMessage={errors.job?.message}
              />
            </div>
          </div>

          <div className='mt-4 flex flex-wrap flex-col sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize' />
            <div className='w-[80%] pl-5'>
              <Button type='submit' className='flex items-center h-9 bg-red-500 text-white px-5 text-center text-s'>
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:w-72 md:border-l md:border-l-gray-300'>
          <div className='flex flex-col items-center'>
            <div className='my-5 h-24 w-24'>
              <img
                src={previewImage || getAvatarUrl(avatar)}
                alt='avatar_profile'
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            <InputFile onChange={handleOnChange} />
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
