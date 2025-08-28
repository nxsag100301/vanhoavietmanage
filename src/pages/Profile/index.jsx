import { Button } from '@/components/ui/button'
import images from '@/constants/images'
import React, { useEffect, useState } from 'react'
import InfomationForm from './components/InfomationForm'
import Permission from './components/Permission'
import ChangePasswordModal from './components/ChangePasswordModal'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const [isChangePassword, setIsChangePassword] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash.replace('#', '') === 'changePassword') {
      return setIsChangePassword(true)
    }
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return (
    <div>
      <ChangePasswordModal
        open={isChangePassword}
        onChange={setIsChangePassword}
      />
      <h1 className='page-title'>Tài khoản của tôi</h1>
      <div className='h-20 flex justify-between mb-4 2xl:mb-8'>
        <div className='flex gap-[18px] items-center'>
          <img
            src={images.avatar}
            className='h-16 w-16 2xl:h-20 2xl:w-20 rounded-full'
          />
          <div className='space-y-2 2xl:space-y-3'>
            <p className='text-h5 2xl:text-h4'>Nguyễn Văn A</p>
            <p className='text-tagline-semibold 2xl:text-body2-medium text-text-800'>
              123456789
            </p>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <Button variant='outline' className='h-[38px] 2xl:h-[46px]'>
            Đăng xuất
          </Button>
          <Button
            onClick={() => setIsChangePassword(true)}
            className='h-[38px] 2xl:h-[46px]'
          >
            Đổi mật khẩu
          </Button>
        </div>
      </div>
      <div className='space-y-4 2xl:space-y-6'>
        <InfomationForm />
        <Permission />
      </div>
    </div>
  )
}

export default Profile
