import * as React from 'react'
import { cn } from '@/lib/utils'
import icons from '@/constants/icons'

const Input = React.forwardRef(
  ({ className, type, startIcon, ...props }, ref) => {
    const { 'aria-invalid': ariaInvalid } = props
    const [showPassword, setShowPassword] = React.useState(false)

    if (type !== 'password') {
      return (
        <div className='relative'>
          <input
            type={type}
            className={cn(
              `flex h-[54px] w-full rounded-[16px] border border-grayneutral-100 bg-text-50 px-6 py-[15px] 
              text-h5 text-text-800 shadow-sm transition-colors file:border-0 file:bg-transparent 
              file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground 
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-grayneutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
              className,
              ariaInvalid &&
                'border-error-600 placeholder:text-error-600 focus-visible:ring-error-600',
              startIcon && 'px-12'
            )}
            ref={ref}
            {...props}
          />
          {startIcon && (
            <img
              src={startIcon}
              className='absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6'
            />
          )}
        </div>
      )
    }

    return (
      <div className={cn('relative w-full', className)}>
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            `flex h-[54px] w-full rounded-[16px] border border-grayneutral-100 bg-text-50 px-6 py-[15px] 
          text-h5 text-text-800 shadow-sm transition-colors file:border-0 file:bg-transparent 
          file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-grayneutral-400 
          disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pr-12`,
            ariaInvalid && 'border-error-600 placeholder:text-error-600'
          )}
          ref={ref}
          {...props}
        />
        <button
          type='button'
          onClick={() => setShowPassword((show) => !show)}
          className='absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none'
          tabIndex={-1}
          aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'}
        >
          {showPassword ? (
            <img src={icons.eyeOpen} alt='Hide password' />
          ) : (
            <img src={icons.eyeClose} alt='Show password' />
          )}
        </button>
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
