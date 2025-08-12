import React from 'react'
import { Input } from '../ui/input'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'
import DatePicker from './components/DatePicker'

const MainHeader = () => {
  return (
    <div className='h-[118px] w-full px-12 py-8 flex items-center justify-between border-b-2 border-red-500'>
      <div className='flex gap-6 items-center'>
        <div className='flex gap-4 items-center'>
          <img
            src={icons.arrowLeftAvailable}
            className='h-6 w-6 cursor-pointer'
          />
          <img
            src={icons.arrowRightAvailable}
            className='h-6 w-6 cursor-pointer'
          />
        </div>
        <Input
          startIcon={icons.search}
          className='w-[410px]'
          placeholder='Tìm kiếm...'
        />
      </div>
      <div className='flex gap-4 items-center'>
        <div className='flex gap-[21px] items-center'>
          <p className='text-body2-medium'>Loại báo cáo</p>
          <Switch />
          <p className='text-body2-medium'>So sánh báo cáo</p>
        </div>
        <Button className='bg-white w-[54px] h-[54px] hover:bg-grayneutral-200'>
          <img src={icons.bell} />
        </Button>

        <DatePicker />

        <img
          src={images.avatar}
          className='h-[54px] w-[54px] border rounded-full p-1 border-grayneutral-800 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default MainHeader
