import { useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger
} from '@/components/ui/sidebar'
import { useState } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import icons from '@/constants/icons'
import DropdownCollapsed from './components/DropdownCollapsed'
import DropdownExpanded from './components/DropdownExpanded'
import MenuItemCollapsed from './components/MenuItemCollapsed'
import MenuItemExpanded from './components/MenuItemExpanded'

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
                      isCollapsed ? (
                        // --- Dropdown khi collapsed ---
                        <DropdownCollapsed
                          key={item.url}
                          title={item.title}
                          icon={item.icon}
                          children={item.children}
                        />
                      ) : (
                        // --- Collapsible khi expanded ---
                        <DropdownExpanded
                          key={item.url}
                          title={item.title}
                          icon={item.icon}
                          children={item.children}
                        />
                      )
                    ) : (
                      // --- Item không có children ---
                      <SidebarMenuItem
                        key={item.url}
                        className={`p-[10px] rounded-xl ${
                          location.pathname === item.url ? 'bg-[#F2F5F0]' : ''
                        }`}
                      >
                        {isCollapsed ? (
                          <MenuItemCollapsed
                            url={item.url}
                            title={item.title}
                            icon={item.icon}
                          />
                        ) : (
                          <MenuItemExpanded
                            url={item.url}
                            title={item.title}
                            icon={item.icon}
                          />
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
            className={`${
              !isCollapsed ? 'ml-[17px]' : 'ml-[22px]'
            } mb-4 transition-all duration-300 ease-in-out`}
            onClick={() => setIsCollapsed((prev) => !prev)}
          />
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  )
}
