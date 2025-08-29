import Dropdown from '@/components/Dropdown/Dropdown'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const titleDataDropdown = [
  { name: 'Ông', value: 'gentlement' },
  { name: 'Bà', value: 'lady' }
]

const areaDataDropdown = [
  { name: 'Khu văn hoá Việt', value: 'vhv' },
  { name: 'Khu linh kỳ mộc', value: 'lkm' }
]

const FormSchema = z
  .object({
    email: z.email({ message: 'Email không hợp lệ' }),
    password: z.string().min(6, { message: 'Mật khẩu phải ít nhất 6 ký tự' }),
    repassword: z
      .string()
      .min(6, { message: 'Nhập lại mật khẩu không được bỏ trống' })
  })
  .refine((data) => data.password === data.repassword, {
    path: ['repassword'],
    message: 'Mật khẩu nhập lại không khớp'
  })

const InformationForm = () => {
  const [title, setTitle] = useState(titleDataDropdown[0].value)
  const [area, setArea] = useState(areaDataDropdown[0].value)
  const [gender, setGender] = useState('male') // male || female || none

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      repassword: ''
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <div className='my-2 space-y-2'>
          <div>
            <FormLabel>Danh xưng</FormLabel>
            <Dropdown
              className='bg-text-50 hover:bg-text-100 mt-1'
              data={titleDataDropdown}
              onChange={setTitle}
            />
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Họ</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Tên đệm & Tên riêng</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='space-x-3'>
            <Button
              onClick={() => setGender('male')}
              variant={gender === 'male' ? 'default' : 'outline'}
              className='text-tagline-regular px-6 h-[34px] 3xl:h-[38px] rounded-[12px] 3xl:rounded-[14px]'
            >
              Nam
            </Button>
            <Button
              onClick={() => setGender('female')}
              variant={gender === 'female' ? 'default' : 'outline'}
              className='text-tagline-regular px-6 h-[34px] 3xl:h-[38px] rounded-[12px] 3xl:rounded-[14px]'
            >
              Nữ
            </Button>
            <Button
              onClick={() => setGender('none')}
              variant={gender === 'none' ? 'default' : 'outline'}
              className='text-tagline-regular px-6 h-[34px] 3xl:h-[38px] rounded-[12px] 3xl:rounded-[14px]'
            >
              Không chọn
            </Button>
          </div>
          <div>
            <FormLabel>Khu vực</FormLabel>
            <Dropdown
              className='bg-text-50 hover:bg-text-100 mt-1'
              data={areaDataDropdown}
              onChange={setArea}
            />
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Điện thoại</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Ngày sinh</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Địa chỉ</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <FormLabel>Tỉnh, thành phố</FormLabel>
              <Dropdown
                className='bg-text-50 hover:bg-text-100 mt-1'
                data={areaDataDropdown}
                onChange={setArea}
              />
            </div>
            <div>
              <FormLabel>Quốc gia</FormLabel>
              <Dropdown
                className='bg-text-50 hover:bg-text-100 mt-1'
                data={areaDataDropdown}
                onChange={setArea}
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default InformationForm
