import { Input } from '@/components/ui/input'
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
import { useEffect } from 'react'
import RightModal from '@/components/Modal/RightModal'

const FormSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, { message: 'Mật khẩu phải ít nhất 6 ký tự' }),
    confirmNewPassword: z
      .string()
      .min(6, { message: 'Mật khẩu phải ít nhất 6 ký tự' })
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Mật khẩu nhập lại không khớp',
    path: ['confirmNewPassword']
  })

const ChangePasswordModal = ({ open, onChange }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newPassword: '',
      confirmNewPassword: ''
    }
  })

  const onSubmit = (data) => {
    console.log('data: ', data)
  }

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open, form])

  return (
    <Form {...form}>
      <form
      // onSubmit={form.handleSubmit(onSubmit)}
      >
        <RightModal
          open={open}
          onChange={onChange}
          title={'Đổi mật khẩu'}
          rightButtonTitle={'Cập nhật'}
          onClickRight={form.handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-6 flex-1 h-full'>
            <FormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Mật khẩu mới</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmNewPassword'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Nhập lại mật khẩu mới</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </RightModal>
      </form>
    </Form>
  )
}

export default ChangePasswordModal
