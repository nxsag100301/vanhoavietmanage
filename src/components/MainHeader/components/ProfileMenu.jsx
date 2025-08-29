import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import icons from '@/constants/icons'
import images from '@/constants/images'

const ProfileInfomation = () => (
  <div className='px-2 py-3 rounded-[16px] flex justify-between items-center border border-text-100 shadow mb-3 bg-text-50'>
    <div className='flex flex-col gap-[6px]'>
      <p className='text-body2-medium text-grayneutral-950'>Trần Văn A</p>
      <p className='text-tagline-regular text-grayneutral-500'>
        SDHUIDUBEW#AVC
      </p>
    </div>
    <img
      src={images.avatar}
      className='h-[45px] w-[45px] 3xl:h-[54px] 3xl:w-[54px] border rounded-full p-1 border-grayneutral-800 cursor-pointer'
    />
  </div>
)

const Icon = ({ src }) => <img src={src} className='w-5 h-5 3xl:h-6 3xl:w-6' />

const ProfileMenu = () => {
  const navigate = useNavigate()
  const [isEnglish, setIsEnglish] = useState(false)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <img
          src={images.avatar}
          className='h-[45px] w-[45px] 3xl:h-[54px] 3xl:w-[54px] border rounded-full p-1 border-grayneutral-800 cursor-pointer'
        />
      </PopoverTrigger>

      <PopoverContent className='w-[287px] rounded-[24px] p-2'>
        <ProfileInfomation />
        <div className='flex flex-col gap-1'>
          <button
            onClick={() => navigate('/profile')}
            className='flex items-center gap-2 px-2 py-2 rounded-[12px] hover:bg-gray-100'
          >
            <Icon src={icons.people} />
            Tài khoản của tôi
          </button>

          <button
            onClick={() => navigate('/profile#permission')}
            className='flex items-center gap-2 px-2 py-2 rounded-[12px] hover:bg-gray-100'
          >
            <Icon src={icons.products} />
            Chức năng
          </button>

          <button
            onClick={() => navigate('/profile#changePassword')}
            className='flex items-center gap-2 px-2 py-2 rounded-[12px] hover:bg-gray-100'
          >
            <Icon src={icons.fingerPrint} />
            Đổi mật khẩu
          </button>

          <div className='flex items-center gap-2 px-2 py-2 rounded-[12px] hover:bg-gray-100'>
            <Icon src={icons.language} />
            <span>{isEnglish ? 'English' : 'Tiếng Việt'}</span>
            <Switch
              className='ml-auto'
              checked={isEnglish}
              onCheckedChange={setIsEnglish}
            />
          </div>

          <button className='flex items-center gap-2 px-2 py-2 rounded-[12px] hover:bg-gray-100'>
            <Icon src={icons.trash} />
            Xoá dữ liệu
          </button>
        </div>

        <div className='border-t my-2' />

        <button className='flex items-center gap-2 px-2 py-2 rounded-[12px] hover:bg-gray-100'>
          <Icon src={icons.logout} />
          Đăng xuất
        </button>
      </PopoverContent>
    </Popover>
  )
}

export default ProfileMenu
