import { Button } from '@/components/ui/button'
import icons from '@/constants/icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
import { useState } from 'react'
import { isEqual } from 'lodash'

// Schema validate với Zod
const FormSchema = z.object({
  firstName: z.string().nonempty({ message: 'Vui lòng nhập họ' }),
  lastName: z.string().nonempty({ message: 'Vui lòng nhập tên' }),
  id: z.string().nonempty({ message: 'Vui lòng nhập ID' }),
  phone: z
    .string()
    .regex(/^(0|\+84)\d{9}$/, { message: 'Số điện thoại không hợp lệ' }),
  email: z.email({ message: 'Email không hợp lệ' }),
  dateOfBirth: z.string().nonempty({ message: 'Vui lòng nhập ngày sinh' }),
  cccdCode: z.string().regex(/^\d{12}$/, { message: 'CCCD phải gồm 12 số' }),
  area: z.string().nonempty({ message: 'Vui lòng nhập khu vực' }),
  position: z.string().nonempty({ message: 'Vui lòng nhập chức vụ' })
})

const InfomationForm = () => {
  const [isEdit, setIsEdit] = useState(false)

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: 'Nguyễn',
      lastName: 'Văn A',
      id: '123456789',
      phone: '0773333333',
      email: 'nxsag100301@gmail.com',
      dateOfBirth: '2000-01-01',
      cccdCode: '111111111111',
      area: 'Linh Kỳ Mộc',
      position: 'Quản trị viên'
    }
  })

  const fields = [
    { name: 'firstName', label: 'Họ', type: 'text' },
    { name: 'lastName', label: 'Tên lót & tên', type: 'text' },
    { name: 'id', label: 'Mã nhân viên', type: 'text' },
    { name: 'phone', label: 'Số điện thoại', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'dateOfBirth', label: 'Ngày sinh', type: 'text' },
    { name: 'cccdCode', label: 'Số CCCD', type: 'password' },
    { name: 'area', label: 'Khu vực', type: 'text' },
    { name: 'position', label: 'Vị trí', type: 'text' }
  ]

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleSaveChanges = (data) => {
    setIsEdit(false)
    if (isEqual(data, form.formState.defaultValues)) return
    console.log('data: ', data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSaveChanges)}
        className='px-8 py-6 border border-grayneutral-200 bg-white rounded-[32px]'
      >
        <div className='flex justify-between mb-8'>
          <p className='text-h4 text-primary-700'>Thông tin</p>
          {isEdit ? (
            <Button type='submit' className='text-body2-medium text-white'>
              <img
                src={icons.confirmed}
                className='h-[18px] w-[18px] invert brightness-0'
                alt='confirmed'
              />
              Lưu thay đổi
            </Button>
          ) : (
            <>
              <Button
                onClick={handleEdit}
                variant='outline'
                className='text-body2-medium text-text-950'
                type='button'
              >
                <img src={icons.pencil} className='h-[18px] w-[18px]' />
                Chỉnh sửa
              </Button>

              {/* Fake button để tránh việc button chỉnh sửa tự submit form */}
              <button type='submit' className='hidden'></button>
            </>
          )}
        </div>

        <div className='grid grid-cols-3 gap-[18px]'>
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: f }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input type={field.type} {...f} readOnly={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
      </form>
    </Form>
  )
}

export default InfomationForm
