import { Calendar, Home, Inbox, Search, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarTrigger
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible'

// Menu items
const items = [
  {
    groupName: 'Trang chủ',
    children: [
      { title: 'Danh sách khu vực', url: '/listarea', icon: Home },
      { title: 'Thông báo', url: '/notifications', icon: Inbox }
    ]
  },
  {
    groupName: 'Quản lý',
    children: [
      { title: 'Doanh thu', url: '/revenue', icon: Home },
      { title: 'Khách hàng', url: '/customer', icon: Inbox },
      {
        title: 'Chi phí',
        url: '/expense',
        icon: Calendar
      },
      {
        title: 'Sản phẩm',
        url: 'products',
        icon: Search,
        children: [
          { title: 'Danh sách', url: '/products/list' },
          { title: 'Định danh', url: '/products/identify' },
          { title: 'Đơn hàng', url: '/products/orders' },
          { title: 'Combo', url: '/products/combo' }
        ]
      },
      {
        title: 'Phòng ban',
        url: '/department',
        icon: Search,
        children: [
          { title: 'Danh sách', url: '/department/list' },
          { title: 'Nhân sự', url: '/department/staff' },
          { title: 'Tài sản', url: '/department/assets' }
        ]
      }
    ]
  },
  {
    groupName: 'Trợ giúp',
    children: [
      { title: 'Liên hệ', url: '/contact', icon: Home },
      { title: 'Cộng đồng', url: '/community', icon: Inbox }
    ]
  }
]

export function AppSidebar() {
  const location = useLocation()
  return (
    <Sidebar
      collapsible='icon'
      className='px-[20px] py-8 data-[state=collapsed]:px-0'
    >
      <SidebarContent>
        <div className='mb-[60px] h-[60px] bg-[#D9D9D9]'></div>
        {items.map((group) => (
          <SidebarGroup key={group.groupName}>
            <SidebarGroupLabel className='text-subtitle3 text-text-400 mb-4'>
              {group.groupName}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className='space-y-[20px]'>
                {group.children.map((item) =>
                  item.children ? (
                    <Collapsible key={item.url} className='group/collapsible'>
                      <SidebarMenuItem className='p-[10px] rounded-xl'>
                        <SidebarMenuButton asChild>
                          <CollapsibleTrigger className='flex items-center w-full'>
                            <item.icon
                              className='mr-4'
                              style={{ width: '2rem', height: '2rem' }}
                            />
                            <span className='text-subtitle1 text-black'>
                              {item.title}
                            </span>
                            <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                          </CollapsibleTrigger>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <CollapsibleContent className='pt-[20px] space-y-[6px]'>
                        <SidebarMenuSub className='pl-[32px]'>
                          {item.children.map((child) => (
                            <SidebarMenuItem
                              key={child.url}
                              className={`p-[10px] rounded-xl ${
                                location.pathname === child.url
                                  ? 'bg-[#F2F5F0]'
                                  : ''
                              }`}
                            >
                              <SidebarMenuButton asChild>
                                <Link
                                  to={child.url}
                                  className={`text-subtitle1 ${
                                    location.pathname === child.url
                                      ? 'bg-[#F2F5F0] text-black'
                                      : 'text-text-400'
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem
                      key={item.url}
                      className={`p-[10px] rounded-xl ${
                        location.pathname === item.url ? 'bg-[#F2F5F0]' : ''
                      }`}
                    >
                      <SidebarMenuButton asChild>
                        <Link to={item.url} className={`flex items-center`}>
                          <item.icon
                            className='mr-4'
                            style={{ width: '2rem', height: '2rem' }}
                          />
                          <span className={'text-subtitle1 text-black'}>
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger className='ml-2' />
      </SidebarFooter>
    </Sidebar>
  )
}
