import React from 'react'
import { Input } from '../ui/input'
import icons from '@/constants/icons'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'
import DatePicker from './components/DatePicker'
import Notifications from './components/Notifications'
import { Popover, PopoverTrigger } from '../ui/popover'
import ProfileMenu from './components/ProfileMenu'

const MainHeader = () => {
  return (
    <div className='bg-white h-[80px] 3xl:h-[118px] w-full px-12 py-8 flex items-center justify-between border-b border-grayneutral-200'>
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
          className='w-[300px] 3xl:w-[410px]'
          placeholder='Tìm kiếm...'
        />
      </div>
      {/* Report */}
      <div className='flex gap-3 3xl:gap-4 items-center'>
        <div className='flex gap-3 3xl:gap-[21px] items-center'>
          <p className='text-tagline-semibold 3xl:text-body2-medium'>
            Loại báo cáo
          </p>
          <Switch />
          <p className='text-tagline-semibold 3xl:text-body2-medium'>
            So sánh báo cáo
          </p>
        </div>
        {/* Notifications */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='w-[42px] h-[42px] p-3 3xl:p-4 3xl:w-[54px] 3xl:h-[54px] hover:bg-grayneutral-200'
            >
              <img src={icons.bell} />
            </Button>
          </PopoverTrigger>
          <Notifications />
        </Popover>

        {/* DatePicker */}
        <DatePicker />

        {/* Profile */}
        <ProfileMenu />
      </div>
    </div>
  )
}

export default MainHeader
