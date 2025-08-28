import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileInfomation = () => {
  return (
    <div className='px-2 py-3 rounded-[16px] flex justify-between items-center border border-text-100 shadow mb-3 bg-text-50'>
      <div className='flex flex-col gap-[6px]'>
        <p className='text-body2-medium text-grayneutral-950'>Trần Văn A</p>
        <p className='text-tagline-regular text-grayneutral-500'>
          SDHUIDUBEW#AVC
        </p>
      </div>
      <img
        src={images.avatar}
        className='h-[45px] w-[45px] 2xl:h-[54px] 2xl:w-[54px] border rounded-full p-1 border-grayneutral-800 cursor-pointer'
      />
    </div>
  )
}

const Icon = ({ src }) => {
  return <img src={src} className='w-5 h-5 2xl:h-6 2xl:w-6' />
}

const ProfileMenu = () => {
  const navigate = useNavigate()
  const [isEnglish, setIsEnglish] = useState(false)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          src={images.avatar}
          className='h-[45px] w-[45px] 2xl:h-[54px] 2xl:w-[54px] border rounded-full p-1 border-grayneutral-800 cursor-pointer'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-[287px] rounded-[24px]'
        align='end'
        modal={false}
      >
        <DropdownMenuGroup>
          <ProfileInfomation />
          <DropdownMenuItem onClick={() => navigate('/profile')}>
            <Icon src={icons.people} />
            Tài khoản của tôi
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/profile#permission')}>
            <Icon src={icons.products} />
            Chức năng
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/profile#changePassword')}>
            <Icon src={icons.fingerPrint} />
            Đổi mật khẩu
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Icon src={icons.language} />
            {isEnglish ? 'English' : 'Tiếng Việt'}
            <Switch
              className='ml-auto'
              checked={isEnglish}
              onCheckedChange={setIsEnglish}
            />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon src={icons.trash} />
            Xoá dữ liệu
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon src={icons.logout} />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu
