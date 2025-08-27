import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
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
import { useEffect } from 'react'

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
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className='left-[85%] top-[80px] 2xl:top-[118px] translate-y-0 w-[350px] 2xl:w-[420px] 3xl:w-[519px] h-[600px] 2xl:h-[700px] 3xl:h-[925px] !rounded-[32px] px-[30px]'
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col justify-between gap-6'
          >
            <DialogHeader className='flex flex-row items-center h-[38px] gap-4'>
              <DialogClose asChild>
                <Button
                  variant='outline'
                  className='h-[28px] w-[28px] 2xl:h-[38px] 2xl:w-[38px] rounded-full p-0'
                >
                  <img
                    src={icons.backArrow}
                    className='w-[14px] h-[14px] 2xl:w-[18px] 2xl:h-[18px]'
                    style={{
                      filter: 'brightness(0) saturate(100%)'
                    }}
                  />
                </Button>
              </DialogClose>
              <DialogTitle className='!text-h5 2xl:!text-h4 3xl:!text-h3 text-primary-700 pb-1'>
                Đổi mật khẩu
              </DialogTitle>
            </DialogHeader>
            <div className='flex flex-col gap-6 flex-1'>
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
            <DialogFooter className='grid grid-cols-2'>
              <DialogClose asChild>
                <Button variant='gray' className='h-[44px] 2xl:h-[53px]'>
                  Huỷ
                </Button>
              </DialogClose>
              <Button type='submit' className='h-[44px] 2xl:h-[53px]'>
                Cập nhật
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ChangePasswordModal
