import { Button } from '@/components/ui/button'
import icons from '@/constants/icons'
import images from '@/constants/images'
import React from 'react'

const OrderDetail = ({ status, orderDetail }) => {
  return (
    <div className='p-4 border border-grayneutral-100 bg-background space-y-3 rounded-[20px]'>
      <div className='flex gap-3'>
        <div className='h-10 w-10 rounded-[10px] border border-jungle-100 bg-primary-50 flex items-center justify-center'>
          <img
            src={status === 'waiting' ? icons.loader : icons.checked}
            className='w-4 h-4'
          />
        </div>
        <div className='flex justify-between w-full'>
          <div className='space-y-1'>
            <p className='text-body2-medium text-text-950'>
              Đơn hàng 123ABC#123DEF
            </p>
            <p className='text-tagline-regular text-text-500'>
              Đã tạo 1 tiếng trước
            </p>
          </div>
          {status === 'confirmed' && (
            <Button
              variant='outline'
              className='h-[38px] text-text-950 text-tagline-regular'
            >
              Xem thông tin
            </Button>
          )}
        </div>
      </div>
      {status === 'waiting' && (
        <div className='space-x-3'>
          <Button
            variant='outline'
            className='h-[38px] w-[112px] text-text-950 text-tagline-regular '
          >
            Huỷ đơn
          </Button>
          <Button className='h-[38px] w-[112px] !text-tagline-regular text-white'>
            Xác nhận
          </Button>
        </div>
      )}
    </div>
  )
}

const SystemNotification = ({ title, time, status, orderDetail, read }) => {
  return (
    <div
      className={`${
        !read && 'border-l-4 border-warning-400'
      } flex px-6  justify-between cursor-pointer`}
    >
      <div className='flex gap-[14px] w-full'>
        <img
          src={images.avatar2}
          className='w-[50px] h-[50px] rounded-[12px]'
        />
        <div className='w-full'>
          <p className='text-subtitle3'>{title}</p>
          <div className='flex gap-3 items-center mt-3 mb-6'>
            <p className='text-tagline-regular text-text-800 '>{time}</p>
            <div className='w-[6px] h-[6px] bg-text-800 rounded-full'></div>
            <p className='text-tagline-regular text-text-800'>
              {status === 'waiting' ? 'Chờ xác nhận' : 'Đã xác nhận'}
            </p>
          </div>
          <OrderDetail status={status} orderDetail={orderDetail} />
        </div>
      </div>

      {!read && (
        <div className='h-[10px] w-[10px] rounded-full bg-warning-400'></div>
      )}
    </div>
  )
}

export default SystemNotification
