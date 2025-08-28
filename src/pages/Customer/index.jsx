import DataTable from '@/components/DataTable/DataTable'
import Dropdown from '@/components/Dropdown/Dropdown'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import icons from '@/constants/icons'
import React, { useState } from 'react'
import AddCustomerModal from './components/AddCustomerModal'

const dropdownData = [
  { name: 'Khu văn hoá Việt', value: 'vhv' },
  { name: 'Khu văn hoá Việt 2', value: 'vhv2' }
]

const Icon = ({ src }) => {
  return <img src={src} className='w-5 h-5 2xl:h-6 2xl:w-6' />
}

const Customer = () => {
  const [area, setArea] = useState(dropdownData[0].value)
  const [openModalAddCustomer, setOpenModalAddCustomer] = useState(false)

  const customerData = [
    {
      id: '0',
      firstName: 'Nguyễn Văn',
      lastName: 'A',
      phoneNumber: '0773482059',
      email: 'nxsag100301@gmail.com',
      memberCardId: 'QWERTYUIOP',
      birthday: '11/11/1111',
      revenue: 100000000
    },
    {
      id: '1',
      firstName: 'Trần Thị',
      lastName: 'B',
      phoneNumber: '0912345678',
      email: 'tranb@example.com',
      memberCardId: 'ZXCVBNMASD',
      birthday: '12/12/1995',
      revenue: 25000000
    },
    {
      id: '2',
      firstName: 'Lê Văn',
      lastName: 'C',
      phoneNumber: '0987654321',
      email: 'lec@example.com',
      memberCardId: 'POIUYTREWQ',
      birthday: '05/05/1990',
      revenue: 50000000
    },
    {
      id: '3',
      firstName: 'Phạm Thị',
      lastName: 'D',
      phoneNumber: '0933221100',
      email: 'phamd@example.com',
      memberCardId: 'MNBVCXZLKJ',
      birthday: '01/01/1998',
      revenue: 12000000
    },
    {
      id: '4',
      firstName: 'Hoàng Văn',
      lastName: 'E',
      phoneNumber: '0909090909',
      email: 'hoange@example.com',
      memberCardId: 'ASDFGHJKLQ',
      birthday: '07/07/1985',
      revenue: 80000000
    },
    {
      id: '5',
      firstName: 'Ngô Thị',
      lastName: 'F',
      phoneNumber: '0977777777',
      email: 'ngof@example.com',
      memberCardId: 'QAZWSXEDCR',
      birthday: '03/03/1993',
      revenue: 43000000
    },
    {
      id: '6',
      firstName: 'Đặng Văn',
      lastName: 'G',
      phoneNumber: '0955555555',
      email: 'dangg@example.com',
      memberCardId: 'TGBNHYUJMK',
      birthday: '10/10/1989',
      revenue: 67000000
    },
    {
      id: '7',
      firstName: 'Bùi Thị',
      lastName: 'H',
      phoneNumber: '0944444444',
      email: 'buih@example.com',
      memberCardId: 'PLMOKNIJBU',
      birthday: '08/08/1991',
      revenue: 15000000
    },
    {
      id: '8',
      firstName: 'Vũ Văn',
      lastName: 'I',
      phoneNumber: '0933333333',
      email: 'vui@example.com',
      memberCardId: 'YHNBGVFCDX',
      birthday: '09/09/1992',
      revenue: 92000000
    },
    {
      id: '9',
      firstName: 'Đỗ Thị',
      lastName: 'K',
      phoneNumber: '0922222222',
      email: 'dok@example.com',
      memberCardId: 'WSXEDCRFVT',
      birthday: '06/06/1996',
      revenue: 31000000
    }
  ]

  const systemNotificationColumns = [
    {
      accessorKey: 'firstName',
      header: 'Họ',
      cell: ({ row }) => (
        <div className='text-body2-medium text-text-800'>
          {row.getValue('firstName')}
        </div>
      )
    },
    {
      accessorKey: 'lastName',
      header: 'Tên',
      cell: ({ row }) => (
        <div className='text-body2-medium text-text-800'>
          {row.getValue('lastName')}
        </div>
      )
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Số điện thoại',
      cell: ({ row }) => (
        <div className='text-body2-medium text-text-800'>
          {row.getValue('phoneNumber')}
        </div>
      )
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => (
        <div className='text-body2-medium text-text-800'>
          {row.getValue('email')}
        </div>
      )
    },
    {
      accessorKey: 'memberCardId',
      header: 'Mã thẻ thành viên',
      cell: ({ row }) => (
        <div className='text-body2-medium text-text-800'>
          {row.getValue('memberCardId')}
        </div>
      )
    },
    {
      accessorKey: 'birthday',
      header: 'Ngày sinh',
      cell: ({ row }) => (
        <div className='text-body2-medium text-text-800'>
          {row.getValue('birthday')}
        </div>
      )
    },
    {
      accessorKey: 'revenue',
      header: 'Doanh thu',
      cell: ({ row }) => (
        <div className='text-body2-medium text-text-800'>
          {row.getValue('revenue').toLocaleString('vi-VN')} ₫
        </div>
      )
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='h-8 w-8 p-0'>
                <img
                  src={icons.threeDotsVertical}
                  className='w-[14px] h-[14px] brightness-0 select-none'
                  alt=''
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>
                <Icon src={icons.detail} />
                Xem thông tin
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon src={icons.pencil} />
                Chỉnh sửa
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon src={icons.card} />
                Thẻ khách hàng
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Icon src={icons.close} />
                Xoá khách hàng
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }
    }
  ]

  return (
    <div>
      <AddCustomerModal
        open={openModalAddCustomer}
        onChange={setOpenModalAddCustomer}
      />
      <div className='flex justify-between items-center my-3 2xl:my-1'>
        <h3 className='page-title'>Danh sách khách hàng</h3>
        <div className='flex flex-row gap-[14px] items-center'>
          <Dropdown data={dropdownData} onChange={setArea} />
          <Button
            onClick={() => setOpenModalAddCustomer(true)}
            className='h-[40px] 2xl:h-[51px]'
          >
            Thêm khách hàng
          </Button>
        </div>
      </div>
      <DataTable
        title='Danh sách khách hàng'
        data={customerData}
        columns={systemNotificationColumns}
        sortBy={'lastName'}
      />
    </div>
  )
}

export default Customer
