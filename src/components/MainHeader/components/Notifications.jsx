import { PopoverContent } from '@/components/ui/popover'
import { useState } from 'react'
import NotificationHeader from './NotificationHeader'
import PersonalNotification from './PersonalNotification'
import SystemNotification from './SystemNotification'
import { Separator } from '@/components/ui/separator'

const Notifications = () => {
  const [tab, setTab] = useState('personal') // personal || system
  return (
    <PopoverContent className='w-[600px] 2xl:w-[724px] pb-6 px-0 pt-0'>
      <NotificationHeader tab={tab} onChangeTab={setTab} />
      {tab === 'personal' ? (
        <div className='space-y-4 max-h-[480px] 2xl:max-h-[766px] overflow-y-auto mt-1 pt-5'>
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
            description='Tài khoản 00000001 cập nhật thành công chức năng: Tạo sản phẩm,
            Chỉnh sửa sản phẩm, Chỉnh sửa đơn hàng, Tạo đơn hàng.'
            read
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
            description='Tài khoản 00000001 cập nhật thành công chức năng: Tạo sản phẩm,
            Chỉnh sửa sản phẩm, Chỉnh sửa đơn hàng, Tạo đơn hàng.'
            read
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
            description='Tài khoản 00000001 cập nhật thành công chức năng: Tạo sản phẩm,
            Chỉnh sửa sản phẩm, Chỉnh sửa đơn hàng, Tạo đơn hàng.'
            read
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
            description='Tài khoản 00000001 cập nhật thành công chức năng: Tạo sản phẩm,
            Chỉnh sửa sản phẩm, Chỉnh sửa đơn hàng, Tạo đơn hàng.'
            read
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
            description='Tài khoản 00000001 cập nhật thành công chức năng: Tạo sản phẩm,
            Chỉnh sửa sản phẩm, Chỉnh sửa đơn hàng, Tạo đơn hàng.'
            read
          />
          <Separator />
          <PersonalNotification
            title='Đổi mật khẩu thành công'
            time='1 tiếng trước'
            description='Tài khoản 00000001 cập nhật thành công chức năng: Tạo sản phẩm,
            Chỉnh sửa sản phẩm, Chỉnh sửa đơn hàng, Tạo đơn hàng.'
            read
          />
        </div>
      ) : (
        <div className='space-y-4 max-h-[480px] 2xl:max-h-[766px] overflow-y-auto mt-1 pt-5'>
          <SystemNotification
            title='Linh Kỳ Mộc'
            time='1 tiếng trước'
            status='waiting'
          />
          <Separator />
          <SystemNotification
            title='Linh Kỳ Mộc'
            time='1 tiếng trước'
            status='waiting'
          />
          <Separator />
          <SystemNotification
            title='Linh Kỳ Mộc'
            time='1 tiếng trước'
            status='confirmed'
          />
          <Separator />
          <SystemNotification
            title='Linh Kỳ Mộc'
            time='1 tiếng trước'
            status='confirmed'
          />
        </div>
      )}
    </PopoverContent>
  )
}

export default Notifications
