import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const MyTabs = ({ data, onChangeTab }) => {
  return (
    <div className='flex w-full flex-col gap-6'>
      <Tabs
        defaultValue={data?.[0]?.value}
        onValueChange={(val) => {
          const item = data.find((d) => d.value === val)
          if (item) onChangeTab?.(item.value)
        }}
      >
        <TabsList className='flex w-full p-1 h-[40px] 2xl:h-[53px] bg-grayneutral-50 border border-grayneutral-100 rounded-[12px] 2xl:rounded-[16px]'>
          {data?.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className='flex-1 rounded-[16px]'
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default MyTabs
