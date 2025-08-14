import DataTable from '@/components/DataTable/DataTable'
import Dropdown from '@/components/Dropdown/Dropdown'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import icons from '@/constants/icons'
import images from '@/constants/images'
import React, { useEffect, useMemo, useState } from 'react'

const Notifications = () => {
  const notificationCategory = useMemo(
    () => [
      { name: 'Hệ thống', value: 'system', icon: null },
      { name: 'Cá nhân', value: 'personal', icon: null }
    ],
    []
  )
  const notificationType = useMemo(
    () => [
      { name: 'Tất cả thông báo', value: 'allNotifications', icon: null },
      { name: 'Thông báo đã đọc', value: 'readNotifications', icon: null },
      { name: 'Thông báo đã lưu', value: 'savedNotifications', icon: null }
    ],
    []
  )

  const [notificationCatState, setNotificationCatState] = useState(
    notificationCategory[0].value
  )
  const [notificationTypeState, setNotificationTypeState] = useState(
    notificationType[0].value
  )

  const handleChangeNotificationCategory = (category) => {
    console.log('category: ', category)
  }

  const handleChangeNotificationType = (type) => {
    console.log('type: ', type)
  }

  useEffect(() => {
    setNotificationCatState(notificationCategory[0].value)
    setNotificationTypeState(notificationType[0].value)
  }, [notificationCategory, notificationType])

  const systemNotificationData = [
    {
      id: '0',
      image: images.avatar2,
      area: 'A Linh Kỳ Mộc',
      content: 'Đơn hàng NIL5OHBNVK#DEA chờ xác nhận',
      time: '1 tiếng trước',
      status: 'waiting'
    },
    {
      id: '1',
      image: images.avatar3,
      area: 'B Linh Kỳ Mộc',
      content: 'Đơn hàng NIL5OHBNVK#DEA chờ xác nhận',
      time: '1 tiếng trước',
      status: 'waiting'
    },
    {
      id: '2',
      image: images.avatar4,
      area: 'C Linh Kỳ Mộc',
      content: 'Đơn hàng NIL5OHBNVK#DEA chờ xác nhận',
      time: '1 tiếng trước',
      status: 'waiting'
    },
    {
      id: '3',
      image: images.avatar2,
      area: 'D Linh Kỳ Mộc',
      content: 'Đơn hàng NIL5OHBNVK#DEA chờ xác nhận',
      time: '1 tiếng trước',
      status: 'confirmed'
    },
    {
      id: '4',
      image: images.avatar3,
      area: 'E Linh Kỳ Mộc',
      content: 'Đơn hàng NIL5OHBNVK#DEA chờ xác nhận',
      time: '1 tiếng trước',
      status: 'confirmed'
    },
    {
      id: '5',
      image: images.avatar4,
      area: 'F Linh Kỳ Mộc',
      content: 'Đơn hàng NIL5OHBNVK#DEA chờ xác nhận',
      time: '1 tiếng trước',
      status: 'waiting'
    }
  ]

  const systemNotificationColumns = [
    {
      id: 'status',
      cell: ({ row }) => (
        <div className='flex justify-center gap-6 items-center w-[110px] mx-auto'>
          <div
            className={`w-[14px] h-[14px] rounded-full ${
              row.original.status === 'waiting'
                ? 'bg-warning-300'
                : 'bg-text-100'
            } `}
          ></div>
          <img src={icons.starOutline} className='w-6 h-6 cursor-pointer' />
          <img src={icons.letter} className='w-6 h-6 cursor-pointer' />
        </div>
      ),
      enableSorting: false,
      enableHiding: false
    },
    {
      accessorKey: 'area',
      header: 'Khu vực',
      cell: ({ row }) => (
        <div className='flex justify-center items-center gap-8'>
          <img
            src={row.original.image}
            className='w-[60px] h-[60px] rounded-[16px]'
          />
          <p className='text-subtitle3 text-primary-700'>
            {row.getValue('area')}
          </p>
        </div>
      )
    },
    {
      accessorKey: 'content',
      header: 'Nội dung',
      cell: ({ row }) => (
        <div className='text-subtitle3 text-text-800'>
          {row.getValue('content')}
        </div>
      )
    },
    {
      accessorKey: 'time',
      header: 'Thời gian',
      cell: ({ row }) => (
        <div className='text-subtitle3 text-text-800'>
          {row.getValue('time')}
        </div>
      )
    },
    {
      accessorKey: 'button',
      header: '',
      cell: ({ row }) => (
        <div className='flex gap-[14px] items-center justify-center'>
          {row.original.status === 'waiting' ? (
            <>
              <Button
                variant='outline'
                className='h-[38px] px-6 py-3 rounded-[14px]'
              >
                Huỷ đơn
              </Button>
              <Button className='h-[38px] px-6 py-3 rounded-[14px]'>
                Xác nhận
              </Button>
            </>
          ) : (
            <Button
              variant='outline'
              className='h-[38px] rounded-[14px] px-6 py-3'
            >
              Xem thông tin
            </Button>
          )}
        </div>
      )
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <img src={icons.threeDotsVertical} className='w-[14px] h-[14px]' /> */}
              <Button variant='outline' className='h-8 w-8 p-0'>
                <img
                  src={icons.threeDotsVertical}
                  className='w-[14px] h-[14px] brightness-0 select-none'
                  alt=''
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy mã đơn hàng
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }
    }
  ]

  return (
    <div>
      <div className='flex justify-between items-center h-[50px] my-8'>
        <div className='flex gap-4 items-center'>
          <h1 className='page-title'>Thông báo</h1>
          <Badge className='bg-warning-600 px-[18px] py-[10px] rounded-full !text-primary-50 text-tagline-semibold'>
            5 thông báo chưa đọc
          </Badge>
        </div>
        <div className='flex gap-[14px] items-center'>
          <Dropdown
            data={notificationCategory}
            onChange={handleChangeNotificationCategory}
          />
          <Dropdown
            data={notificationType}
            onChange={handleChangeNotificationType}
          />
        </div>
      </div>
      <DataTable
        data={systemNotificationData}
        columns={systemNotificationColumns}
        borderRow
      />
    </div>
  )
}

export default Notifications
