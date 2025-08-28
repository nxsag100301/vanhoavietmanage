import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import icons from '@/constants/icons'

const RightModal = ({
  open,
  onChange,
  title,
  children,
  rightButtonTitle,
  onClickRight
}) => {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className='-right-[148px] 2xl:-right-48 top-[80px] 2xl:top-[118px] translate-y-0 w-[420px] 2xl:w-[520px] h-[650px] 2xl:h-[700px] 3xl:h-[925px] !rounded-[32px] pt-6 2xl:pt-8 px-6 2xl:px-[30px]'
      >
        <DialogHeader className='flex flex-row items-center h-[38px] gap-4 '>
          <DialogClose asChild>
            <Button
              variant='outline'
              className='h-[28px] w-[28px] 2xl:h-[38px] 2xl:w-[38px] rounded-full p-0'
            >
              <img
                src={icons.backArrow}
                className='w-[14px] h-[14px] 2xl:w-[18px] 2xl:h-[18px]'
                style={{
                  filter: 'brightness(0) saturate(100%)'
                }}
              />
            </Button>
          </DialogClose>
          <DialogTitle className='!text-h5 2xl:!text-h4 3xl:!text-h3 text-primary-700 pb-1'>
            {title}
          </DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter className='grid grid-cols-2'>
          <DialogClose asChild>
            <Button variant='gray' className='h-[44px] 2xl:h-[53px]'>
              Huỷ
            </Button>
          </DialogClose>
          <Button
            type='submit'
            onClick={onClickRight}
            className='h-[44px] 2xl:h-[53px]'
          >
            {rightButtonTitle}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default RightModal
