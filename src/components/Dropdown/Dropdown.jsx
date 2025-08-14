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

const Dropdown = ({ data, onChange }) => {
  const [open, setOpen] = useState(false)
  const [activeIem, setActiveItem] = useState(data[0])

  const handleChangeValue = (item) => {
    setActiveItem(item)
    onChange(item)
  }

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='w-[287px] h-[50px] bg-grayneutral-50 hover:grayneutral-100 px-6 py-[3px] justify-between text-body2-medium text-grayneutral-950'
        >
          {activeIem?.name}
          <img
            src={icons.arrowDown}
            className={`h-[14px] w-[14px] transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[287px] px-2' align='start'>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <DropdownMenuItem
              key={item.name}
              onClick={() => handleChangeValue(item)}
              className='h-11 px-3 py-[10px] text-body2-medium text-grayneutral-950'
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
