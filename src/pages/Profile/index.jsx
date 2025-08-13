import { Button } from '@/components/ui/button'
import images from '@/constants/images'
import React, { useState } from 'react'
import InfomationForm from './components/InfomationForm'
import Permission from './components/Permission'
import ChangePasswordModal from './components/ChangePasswordModal'

const Profile = () => {
  const [isChangePassword, setIsChangePassword] = useState(false)
  return (
    <div>
      <ChangePasswordModal
        open={isChangePassword}
        onChange={setIsChangePassword}
      />
      <h1 className='page-title'>Tài khoản của tôi</h1>
      <div className='h-20 flex justify-between mb-8'>
        <div className='flex gap-[18px] items-center'>
          <img src={images.avatar} className='h-20 w-20 rounded-full' />
          <div className='space-y-3'>
            <p className='text-h4'>Nguyễn Văn A</p>
            <p className='text-body2-medium text-text-800'>123456789</p>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <Button variant='outline' className='h-[46px]'>
            Đăng xuất
          </Button>
          <Button
            onClick={() => setIsChangePassword(true)}
            className='h-[46px]'
          >
            Đổi mật khẩu
          </Button>
        </div>
      </div>
      <div className='space-y-6'>
        <InfomationForm />
        <Permission />
      </div>
    </div>
  )
}

export default Profile
