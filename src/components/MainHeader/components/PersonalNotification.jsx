import images from '@/constants/images'
import React from 'react'

const PersonalNotification = ({ title, time, description, read }) => {
  return (
    <div
      className={`${
        !read && 'border-l-4 border-warning-400'
      } flex px-6  justify-between cursor-pointer`}
    >
      <div className='flex gap-[14px]'>
        <img src={images.avatar} className='w-[50px] h-[50px] rounded-[12px]' />
        <div>
          <p className='text-subtitle3'>{title}</p>
          <p className='text-tagline-regular text-text-800 mt-3'>{time}</p>
          {description && (
            <p className='text-tagline-regular text-text-800 mt-6'>
              {description}
            </p>
          )}
        </div>
      </div>
      {!read && (
        <div className='h-[10px] w-[10px] rounded-full bg-warning-400'></div>
      )}
    </div>
  )
}

export default PersonalNotification
