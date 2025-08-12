import * as React from 'react'
import moment from 'moment'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import icons from '@/constants/icons'

function formatDate(date) {
  if (!date) {
    return ''
  }

  return moment(date).format('MMMM DD, YYYY')
}

const DatePicker = () => {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(moment().toDate())
  const [month, setMonth] = React.useState(date)
  const [value, setValue] = React.useState(formatDate(date))

  // Hàm parse ngày từ input value dùng moment
  function parseDateFromInput(input) {
    // moment có thể parse các chuỗi ngày cơ bản, nhưng không mạnh như chrono-node
    // Nên bạn có thể điều chỉnh thêm nếu cần
    const m = moment(
      input,
      [
        moment.ISO_8601,
        'MMMM D, YYYY',
        'MM/DD/YYYY',
        'MMM D, YYYY',
        'dddd',
        'dddd, MMMM D, YYYY'
      ],
      true
    )

    if (m.isValid()) {
      return m.toDate()
    }
    return null
  }

  return (
    <div className='relative flex gap-2 w-[272px]'>
      <Input
        id='date'
        value={value}
        className='bg-background pl-14 pr-6  py-[15px] text-h5 text-text-500'
        onChange={(e) => {
          setValue(e.target.value)
          const parsed = parseDateFromInput(e.target.value)
          if (parsed) {
            setDate(parsed)
            setMonth(parsed)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id='date-picker'
            variant='ghost'
            className='absolute top-1/2 left-1 -translate-y-1/2'
          >
            <img src={icons.calendar} className='h-6 w-6' alt='calendar' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='end'>
          <Calendar
            mode='single'
            selected={date}
            captionLayout='dropdown'
            month={month}
            onMonthChange={setMonth}
            onSelect={(date) => {
              setDate(date)
              setValue(formatDate(date))
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePicker
