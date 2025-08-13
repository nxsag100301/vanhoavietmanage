import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible'

const DropdownExpanded = ({ title, icon, children }) => {
  return (
    <Collapsible className='group/collapsible'>
      <SidebarMenuItem className='p-[10px] rounded-xl'>
        <SidebarMenuButton asChild>
          <CollapsibleTrigger className='flex items-center w-full'>
            <img src={icon} alt={title} className='mr-4 h-6 w-6' />
            <span className='text-subtitle1 text-black'>{title}</span>
            <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
          </CollapsibleTrigger>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <CollapsibleContent className='pt-[20px] space-y-[6px]'>
        <SidebarMenuSub className='pl-[32px]'>
          {children.map((child) => (
            <SidebarMenuItem
              key={child.url}
              className={`p-[10px] rounded-xl ${
                location.pathname === child.url ? 'bg-grayneutral-100' : ''
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
}

export default DropdownExpanded
