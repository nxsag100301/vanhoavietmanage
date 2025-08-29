import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover'
import icons from '@/constants/icons'
import { cn } from '@/lib/utils'

// data = [{ name: String, value: String, icon: any }]

const DropdownPopover = ({ data, onChange, className }) => {
  const [activeItem, setActiveItem] = useState(data[0])
  const [open, setOpen] = useState(false)

  const handleChangeValue = (item) => {
    setActiveItem(item)
    onChange(item.value)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'w-full h-[40px] 3xl:h-[50px] bg-grayneutral-50 hover:bg-grayneutral-100 px-6 py-[3px] justify-between text-[12px] 3xl:text-body2-regular text-grayneutral-950 rounded-[12px] 3xl:rounded-[16px]',
            className
          )}
        >
          {activeItem?.name}
          <img
            src={icons.arrowDown}
            className={`h-[10px] w-[10px] 3xl:h-[14px] 3xl:w-[14px] transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-[--radix-popover-trigger-width] max-h-[300px] overflow-auto p-2 rounded-[12px] bg-white shadow-lg'>
        {data.map((item) => (
          <button
            key={item.name}
            onClick={() => handleChangeValue(item)}
            className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left text-grayneutral-950 text-[12px] 3xl:text-body2-regular rounded-[12px]'
          >
            {item.icon && <img src={item.icon} className='h-[18px] w-[18px]' />}
            {item.name}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default DropdownPopover
