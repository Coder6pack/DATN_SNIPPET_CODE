import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự '
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 ký tự '
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự '
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 5 - 160 ký tự '
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự '
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 ký tự '
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
        : undefined
  }
})

// const handleConfirmPasswordYup = (refString: string) => {
//   return yup
//     .string()
//     .required('Nhập lại password là bắt buộc')
//     .min(6, 'Độ dài 6 - 160 ký tự')
//     .max(120, 'Độ dài 6 - 160 ký tự')
//     .oneOf([yup.ref(refString)], 'Nhập lại password không khớp')
// }
//dung yup de khai bao cac rule cua register
export const schema = yup
  .object({
    email: yup
      .string()
      .required('Email là bắt buộc')
      .email('Email không đúng định dạng')
      .max(160, 'Độ dài từ 5 - 160 ký tự ')
      .min(5, 'Độ dài từ 5 - 160 ký tự '),
    password: yup
      .string()
      .required('Password là bắt buộc')
      .min(6, 'Độ dài từ 6 - 160 ký tự ')
      .max(160, 'Độ dài từ 6 - 160 ký tự '),
    confirm_password: yup
      .string()
      .required('Password là bắt buộc')
      .min(6, 'Độ dài từ 6 - 160 ký tự ')
      .max(160, 'Độ dài từ 6 - 160 ký tự ')
      .oneOf([yup.ref('password')], 'Nhập lại password không khớp')
  })
  .required()

export const userSchema = yup.object({
  name: yup.string().max(160, 'Độ dài tối đa 160 ký tự'),
  phone: yup.string().max(20, 'Độ dài tối đa 20 ký tự'),
  job: yup.string().max(160, 'Độ dài tối đa 160 ký tự'),
  profile: yup.string().max(160, 'Độ dài tối đa 160 ký tự'),
  img: yup.string().max(1000, 'Độ dài tối đa 1000 ký tự')
  // password: schema.fields['password'] as yup.StringSchema<string | undefined, yup.AnyObject, ''>,
  // new_password: schema.fields['password'] as yup.StringSchema<string | undefined, yup.AnyObject, ''>,
  // confirm_password: handleConfirmPasswordYup('new_password') as yup.StringSchema<
  //   string | undefined,
  //   yup.AnyObject,
  //   undefined,
  //   ''
  // >
})

//export type loginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>

//export type UserSchema for profile
export type UserSchema = yup.InferType<typeof userSchema>
