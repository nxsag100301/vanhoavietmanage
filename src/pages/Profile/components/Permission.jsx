import { Badge } from '@/components/ui/badge'
import React from 'react'

const Permission = () => {
  const permisstion = [
    { name: 'Bán hàng' },
    { name: 'Huỷ đơn' },
    { name: 'Kiểm tra' },
    { name: 'Chăm sóc khách hàng' }
  ]
  return (
    <div
      className='min-h-[375px] bg-white border
     border-grayneutral-200 rounded-[32px] px-8 py-6'
    >
      <p className='text-h4 text-primary-700 mb-8'>Chức năng</p>
      <div className='flex gap-4'>
        {permisstion.map((item) => (
          <Badge key={item.name} className='px-[18px] py-[10px]'>
            {item.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default Permission
