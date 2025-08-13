import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const NotificationBadge = forwardRef(({ className, number, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'h-5 w-5 rounded-[6px] flex justify-center items-center bg-warning-500 text-tagline-semibold text-white',
        className
      )}
      {...props}
    >
      {number}
    </div>
  )
})

export default NotificationBadge
