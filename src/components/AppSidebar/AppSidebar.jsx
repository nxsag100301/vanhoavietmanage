import { ChevronDown } from 'lucide-react'
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
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useIsMobile } from '@/hooks/use-mobile'
import icons from '@/constants/icons'

// Menu items
const items = [
  {
    groupName: 'Trang chủ',
    children: [
      { title: 'Danh sách khu vực', url: '/listarea', icon: icons.home },
      { title: 'Thông báo', url: '/notifications', icon: icons.bell }
    ]
  },
  {
    groupName: 'Quản lý',
    children: [
      { title: 'Doanh thu', url: '/revenue', icon: icons.revenue },
      { title: 'Khách hàng', url: '/customer', icon: icons.customer },
      { title: 'Chi phí', url: '/expense', icon: icons.expense },
      {
        title: 'Sản phẩm',
        url: 'products',
        icon: icons.products,
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
        icon: icons.departments,
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
      { title: 'Liên hệ', url: '/contact', icon: icons.contact },
      { title: 'Cộng đồng', url: '/community', icon: icons.community }
    ]
  }
]

export function AppSidebar() {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const isMobile = useIsMobile()

  return (
    <TooltipProvider delayDuration={200}>
      <Sidebar
        collapsible='icon'
        data-state={isCollapsed ? 'collapsed' : 'expanded'}
      >
        <SidebarContent className='px-[20px] py-8'>
          <div className='mb-[60px] min-h-[60px] bg-[#D9D9D9]'></div>

          {items.map((group) => (
            <SidebarGroup key={group.groupName}>
              <SidebarGroupLabel className='text-subtitle3 text-text-400 mb-4 -z-10'>
                {group.groupName}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className='space-y-[20px]'>
                  {group.children.map((item) =>
                    item.children ? (
                      isCollapsed && !isMobile ? (
                        // --- Dropdown khi collapsed ---
                        <SidebarMenuItem
                          key={item.url}
                          className='p-[10px] rounded-xl'
                        >
                          <DropdownMenu>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <DropdownMenuTrigger asChild>
                                  <button className='flex items-center justify-center w-full cursor-pointer'>
                                    <img
                                      src={item.icon}
                                      className='h-8 w-8'
                                      alt={item.title}
                                    />
                                  </button>
                                </DropdownMenuTrigger>
                              </TooltipTrigger>
                              <TooltipContent side='right'>
                                {item.title}
                              </TooltipContent>
                            </Tooltip>

                            <DropdownMenuContent side='right' align='start'>
                              {item.children.map((child) => (
                                <DropdownMenuItem key={child.url} asChild>
                                  <Link
                                    to={child.url}
                                    className={`text-subtitle1 ${
                                      location.pathname === child.url
                                        ? 'bg-grayneutral-100 text-black'
                                        : 'text-text-400'
                                    }`}
                                  >
                                    {child.title}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </SidebarMenuItem>
                      ) : (
                        // --- Collapsible khi expanded hoặc mobile ---
                        <Collapsible
                          key={item.url}
                          className='group/collapsible'
                        >
                          <SidebarMenuItem className='p-[10px] rounded-xl'>
                            <SidebarMenuButton asChild>
                              <CollapsibleTrigger className='flex items-center w-full'>
                                <img
                                  src={item.icon}
                                  alt={item.title}
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
                                      ? 'bg-grayneutral-100'
                                      : ''
                                  }`}
                                >
                                  <SidebarMenuButton asChild>
                                    <Link
                                      to={child.url}
                                      className={`text-subtitle1 ${
                                        location.pathname === child.url
                                          ? ' text-black'
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
                      )
                    ) : (
                      // --- Item không có children ---
                      <SidebarMenuItem
                        key={item.url}
                        className={`p-[10px] rounded-xl ${
                          location.pathname === item.url ? 'bg-[#F2F5F0]' : ''
                        }`}
                      >
                        {isCollapsed && !isMobile ? (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton asChild>
                                <Link
                                  to={item.url}
                                  className='flex items-center justify-center'
                                >
                                  <img
                                    src={item.icon}
                                    alt={item.title}
                                    style={{ width: '2rem', height: '2rem' }}
                                  />
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                              {item.title}
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <SidebarMenuButton asChild>
                            <Link to={item.url} className='flex items-center'>
                              <img
                                src={item.icon}
                                alt={item.title}
                                className='mr-4'
                                style={{ width: '2rem', height: '2rem' }}
                              />
                              <span className='text-subtitle1 text-black'>
                                {item.title}
                              </span>
                            </Link>
                          </SidebarMenuButton>
                        )}
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter>
          <SidebarTrigger
            className='ml-7 mb-4'
            onClick={() => setIsCollapsed((prev) => (isMobile ? prev : !prev))}
          />
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  )
}
