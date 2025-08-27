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
import { useState } from 'react'

const Notifications = () => {
  const notificationCategory = [
    { name: 'Hệ thống', value: 'system', icon: null },
    { name: 'Cá nhân', value: 'personal', icon: null }
  ]
  const notificationType = [
    { name: 'Tất cả thông báo', value: 'allNotifications', icon: null },
    { name: 'Thông báo đã đọc', value: 'readNotifications', icon: null },
    { name: 'Thông báo đã lưu', value: 'savedNotifications', icon: null }
  ]

  // Notification category
  const [notificationCatState, setNotificationCatState] = useState(
    notificationCategory[0].value
  )

  // Type: Tất cả || Đã đọc || Đã lưu
  const [notificationTypeState, setNotificationTypeState] = useState(
    notificationType[0].value
  )

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
        <div className='flex justify-center gap-3 2xl:gap-6 items-center w-[100px] 2xl:w-[110px] mx-auto'>
          <div
            className={`w-[10px] h-[10px] 2xl:w-[14px] 2xl:h-[14px] rounded-full ${
              row.original.status === 'waiting'
                ? 'bg-warning-300'
                : 'bg-text-100'
            } `}
          ></div>
          <img
            src={icons.starOutline}
            className='h-5 w-5 2xl:w-6 2xl:h-6 cursor-pointer'
          />
          <img
            src={icons.letter}
            className='h-5 w-5 2xl:w-6 2xl:h-6 cursor-pointer'
          />
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
            className='w-[44px] h-[44px] 2xl:w-[60px] 2xl:h-[60px] rounded-[16px]'
          />
          <p className='text-body2-medium 2xl:text-subtitle3 text-primary-700'>
            {row.getValue('area')}
          </p>
        </div>
      )
    },
    {
      accessorKey: 'content',
      header: 'Nội dung',
      cell: ({ row }) => (
        <div className='text-body2-medium 2xl:text-subtitle3 text-text-800'>
          {row.getValue('content')}
        </div>
      )
    },
    {
      accessorKey: 'time',
      header: 'Thời gian',
      cell: ({ row }) => (
        <div className='text-body2-medium 2xl:text-subtitle3 text-text-800'>
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
                className='h-[38px] px-5 2xl:px-6 py-3 rounded-[14px] text-tagline-semibold 2xl:text-body2-medium'
              >
                Huỷ đơn
              </Button>
              <Button className='h-[38px] px-5 2xl:px-6 py-3 rounded-[14px] !text-grayneutral-50 text-tagline-semibold 2xl:text-[14px] '>
                Xác nhận
              </Button>
            </>
          ) : (
            <Button
              variant='outline'
              className='h-[38px] rounded-[14px] px-4 2xl:px-6 py-3 text-tagline-semibold 2xl:text-body2-medium'
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

  const personalNotificationData = [
    {
      id: '0',
      image: images.avatarMale,
      title: 'Đổi mật khẩu thành công',
      content: '',
      time: '1 tiếng trước',
      status: 'waiting'
    },
    {
      id: '1',
      image: images.avatarMale,
      title: 'B Linh Kỳ Mộc',
      content: '',
      time: '1 tiếng trước',
      status: 'waiting'
    },
    {
      id: '2',
      image: images.avatarMale,
      title: 'C Linh Kỳ Mộc',
      content: 'Tài khoản 00000001 đã gửi yêu cầu khôi phục mật khẩu.',
      time: '1 tiếng trước',
      status: 'waiting'
    },
    {
      id: '3',
      image: images.avatarMale,
      title: 'D Linh Kỳ Mộc',
      content: '',
      time: '1 tiếng trước',
      status: 'confirmed'
    },
    {
      id: '4',
      image: images.avatarMale,
      title: 'Thay đổi thông tin cá nhân thành công',
      content: '',
      time: '1 tiếng trước',
      status: 'confirmed'
    },
    {
      id: '5',
      image: images.avatarMale,
      title: 'Thông báo lỗi',
      content: 'Tài khoản 00000001 đã gửi yêu cầu khôi phục mật khẩu.',
      time: '1 tiếng trước',
      status: 'waiting'
    }
  ]

  const personalNotificationColumns = [
    {
      id: 'status',
      cell: ({ row }) => (
        <div className='flex justify-center gap-3 2xl:gap-6 items-center w-[100px] 2xl:w-[110px] mx-auto'>
          <div
            className={`w-[10px] h-[10px] 2xl:w-[14px] 2xl:h-[14px] rounded-full ${
              row.original.status === 'waiting'
                ? 'bg-warning-300'
                : 'bg-text-100'
            } `}
          ></div>
          <img
            src={icons.starOutline}
            className='h-5 w-5 2xl:w-6 2xl:h-6 cursor-pointer'
          />
          <img
            src={icons.letter}
            className='h-5 w-5 2xl:w-6 2xl:h-6 cursor-pointer'
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false
    },
    {
      accessorKey: 'title',
      header: 'Tiêu đề',
      cell: ({ row }) => (
        <div className='flex justify-start items-center gap-8'>
          <img
            src={row.original.image}
            className='w-[44px] h-[44px] 2xl:w-[60px] 2xl:h-[60px] rounded-[16px] border border-gray-200 object-contain'
          />
          <p className='text-body2-medium 2xl:text-subtitle3 text-primary-700'>
            {row.getValue('title')}
          </p>
        </div>
      )
    },
    {
      accessorKey: 'content',
      header: 'Nội dung',
      cell: ({ row }) => (
        <div className='text-body2-medium 2xl:text-subtitle3 text-text-800'>
          {row.getValue('content') || '-'}
        </div>
      )
    },
    {
      accessorKey: 'time',
      header: 'Thời gian',
      cell: ({ row }) => (
        <div className='text-body2-medium 2xl:text-subtitle3 text-text-800'>
          {row.getValue('time')}
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
      <div className='flex justify-between items-center h-[50px] my-4 2xl:my-8'>
        <div className='flex gap-4 items-center'>
          <h1 className='page-title'>Thông báo</h1>
          <Badge className='bg-warning-600 px-[12px] 2xl:px-[18px] py-[6px] 2xl:py-[10px] rounded-full !text-primary-50 text-[10px] font-medium 2xl:text-tagline-semibold'>
            5 thông báo chưa đọc
          </Badge>
        </div>
        <div className='flex gap-[14px] items-center'>
          <Dropdown
            data={notificationCategory}
            onChange={setNotificationCatState}
          />
          <Dropdown
            data={notificationType}
            onChange={setNotificationTypeState}
          />
        </div>
      </div>
      <DataTable
        title='Danh sách thông báo'
        data={
          notificationCatState === 'system'
            ? systemNotificationData
            : personalNotificationData
        }
        columns={
          notificationCatState === 'system'
            ? systemNotificationColumns
            : personalNotificationColumns
        }
        borderRow
        sortBy={notificationCatState === 'system' ? 'area' : 'title'}
      />
    </div>
  )
}

export default Notifications
