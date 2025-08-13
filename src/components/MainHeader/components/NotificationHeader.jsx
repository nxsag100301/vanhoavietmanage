import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import NotificationBadge from './NotificationBadge'

const NotificationHeader = ({ tab, onChangeTab }) => {
  return (
    <div className='h-[128px] space-y-[20px]'>
      <div className='flex justify-between px-6 pt-6'>
        <div className='flex gap-3 items-center'>
          <p className='text-h5 text-text-950'>Thông báo</p>
          <NotificationBadge number={5} />
        </div>
        <div className='flex items-center gap-3'>
          <Checkbox id='terms' />
          <Label
            htmlFor='terms'
            className='!text-tagline-regular text-text-950'
          >
            Đánh dấu là đã đọc tất cả
          </Label>
        </div>
      </div>
      <div className='border-t-2 border-grayneutral-100 flex items-center pt-[20px] h-[56px]'>
        <div className='flex text-subtitle3 w-[300px]'>
          <div
            onClick={() => onChangeTab('personal')}
            className={`${
              tab === 'personal'
                ? 'border-warning-400 text-text-950'
                : 'border-grayneutral-100 text-text-500'
            } border-b-2  w-[150px] px-6 
            cursor-pointer pb-4 flex items-center gap-3`}
          >
            Cá nhân
            <NotificationBadge
              number={3}
              className={`${
                tab === 'personal'
                  ? 'bg-warning-400'
                  : 'bg-grayneutral-100 text-text-800'
              }`}
            />
          </div>
          <div
            onClick={() => onChangeTab('system')}
            className={`${
              tab === 'system'
                ? 'border-warning-400 text-text-950'
                : 'border-grayneutral-100 text-text-500'
            } border-b-2 w-[150px] px-6 
            cursor-pointer pb-4 flex items-center gap-3`}
          >
            Hệ thống
            <NotificationBadge
              number={2}
              className={`${
                tab === 'system'
                  ? 'bg-warning-400 '
                  : 'bg-grayneutral-100 text-text-800'
              }`}
            />
          </div>
        </div>
        <div className='relative border-b-2 border-grayneutral-100 w-full pr-6 pb-5 pt-1 flex justify-end'>
          <p className='text-body2-medium text-grayneutral-950 cursor-pointer'>
            Xem tất cả
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotificationHeader
