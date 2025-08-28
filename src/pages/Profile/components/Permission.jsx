import { Badge } from '@/components/ui/badge'
import React from 'react'

const Permission = () => {
  const permission = [
    { name: 'Bán hàng' },
    { name: 'Huỷ đơn' },
    { name: 'Kiểm tra' },
    { name: 'Chăm sóc khách hàng' }
  ]
  return (
    <div
      id='permission'
      className='min-h-[375px] bg-white border
     border-grayneutral-200 rounded-[32px] px-6 2xl:px-8 py-4 2xl:py-6'
    >
      <p className='text-h5 2xl:text-h4 text-primary-700 mb-4 2xl:mb-8'>
        Chức năng
      </p>
      <div className='flex gap-4'>
        {permission.map((item) => (
          <Badge
            key={item.name}
            className='px-[14px] py-[6px] 2xl:px-[18px] 2xl:py-[10px]'
          >
            {item.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default Permission
