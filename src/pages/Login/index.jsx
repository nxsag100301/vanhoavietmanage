import { Button } from '@/components/ui/button'
import icons from '@/constants/icons'
import images from '@/constants/images'
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
import { useNavigate } from 'react-router-dom'

const FormSchema = z.object({
  email: z.email({ message: 'Email không hợp lệ' }),
  password: z.string().min(6, {
    message: 'Mật khẩu phải ít nhất 6 ký tự'
  })
})

const Login = () => {
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    console.log('data: ', data)
  }

  return (
    <Form {...form}>
      <div className='grid grid-cols-2 max-w-screen-2xl px-6 my-6 mx-auto'>
        <div className='my-auto h-full flex justify-center items-center'>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h2 className='text-h2 mb-10'>Đăng nhập vào tài khoản của bạn</h2>
            <div className='flex flex-col gap-4 w-[450px] mx-auto'>
              <div className=' flex flex-col gap-8 items-center '>
                <Button
                  type='button'
                  variant='gray'
                  className='w-full h-[58px]'
                >
                  <img src={icons.google} /> Đăng nhập với Google
                </Button>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='Nhập email' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>Mật khẩu</FormLabel>
                      <FormControl>
                        <Input
                          type='password'
                          placeholder='Nhập mật khẩu'
                          {...field}
                          className='relative'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' className='w-full h-[58px]'>
                  Đăng nhập
                </Button>
              </div>
              <p className='text-center text-text-950 text-tagline-regular select-none'>
                Bạn chưa có tài khoản?
              </p>
              <Button
                type='button'
                variant='outline'
                className='w-full h-[58px] mt-4'
                onClick={() => navigate('/register')}
              >
                Đăng ký ngay
              </Button>
            </div>
          </form>
        </div>
        <img
          src={images.loginBanner}
          className='object-cover rounded-[32px] w-full h-full'
        />
      </div>
    </Form>
  )
}

export default Login
