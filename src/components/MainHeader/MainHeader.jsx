import React from 'react'
import { Input } from '../ui/input'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'
import DatePicker from './components/DatePicker'
import { useNavigate } from 'react-router-dom'
import Notifications from './components/Notifications'
import { Popover, PopoverTrigger } from '../ui/popover'

const MainHeader = () => {
  const navigate = useNavigate()

  return (
    <div className='bg-white h-[100px] 2xl:h-[118px] w-full px-12 py-8 flex items-center justify-between border-b border-grayneutral-200'>
      <div className='flex gap-6 items-center'>
        {/* Navigation */}

        {/* <div className='flex gap-4 items-center'>
          <img
            src={icons.arrowLeftAvailable}
            className='h-6 w-6 cursor-pointer'
          />
          <img
            src={icons.arrowRightAvailable}
            className='h-6 w-6 cursor-pointer'
          />
        </div> */}

        {/* Search Input */}
        <Input
          startIcon={icons.search}
          className='w-[300px] 2xl:w-[410px]'
          placeholder='Tìm kiếm...'
        />
      </div>
      {/* Report */}
      <div className='flex gap-2 2xl:gap-4 items-center'>
        <div className='flex gap-3 2xl:gap-[21px] items-center'>
          <p className='text-tagline-semibold 2xl:text-body2-medium'>
            Loại báo cáo
          </p>
          <Switch />
          <p className='text-tagline-semibold 2xl:text-body2-medium'>
            So sánh báo cáo
          </p>
        </div>
        {/* Notifications */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='w-[54px] h-[54px] hover:bg-grayneutral-200'
            >
              <img src={icons.bell} />
            </Button>
          </PopoverTrigger>
          <Notifications />
        </Popover>

        {/* DatePicker */}
        <DatePicker />

        {/* Profile */}
        <img
          onClick={() => navigate('/profile')}
          src={images.avatar}
          className='h-[54px] w-[54px] border rounded-full p-1 border-grayneutral-800 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default MainHeader
