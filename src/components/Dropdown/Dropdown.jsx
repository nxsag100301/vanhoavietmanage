import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import icons from '@/constants/icons'
import { cn } from '@/lib/utils'

// data = [
//   {name: String, value: String, icon: any}
// ]

const Dropdown = ({ data, onChange, className }) => {
  const [open, setOpen] = useState(false)
  const [activeIem, setActiveItem] = useState(data[0])

  const handleChangeValue = (item) => {
    setActiveItem(item)
    onChange(item.value)
  }

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'w-full h-[40px] 2xl:h-[50px] bg-grayneutral-50 hover:grayneutral-100 px-6 py-[3px] justify-between text-[12px] 2xl:text-body2-regular text-grayneutral-950 rounded-[12px] 2xl:rounded-[16px]',
            className
          )}
        >
          {activeIem?.name}
          <img
            src={icons.arrowDown}
            className={`h-[10px] w-[10px] 2xl:h-[14px] 2xl:w-[14px] transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-[--radix-dropdown-menu-trigger-width] px-2'
        align='start'
      >
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <DropdownMenuItem
              key={item.name}
              onClick={() => handleChangeValue(item)}
              className='h-11 px-3 py-[10px] text-[12px] 2xl:text-body2-regular text-grayneutral-950'
            >
              {item.icon && (
                <DropdownMenuShortcut>
                  <img src={item.icon} className='h-[18px] w-[18px]' />
                </DropdownMenuShortcut>
              )}

              {item.name}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
