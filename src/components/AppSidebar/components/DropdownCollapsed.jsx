import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { SidebarMenuItem } from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import React from 'react'
import { Link } from 'react-router-dom'

const DropdownCollapsed = ({ title, icon, children }) => {
  return (
    <SidebarMenuItem className='p-[10px] rounded-xl'>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <button className='flex items-center justify-center w-full cursor-pointer'>
                <img src={icon} className='h-6 w-6' alt={title} />
              </button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side='right'>{title}</TooltipContent>
        </Tooltip>

        <DropdownMenuContent side='right' align='start'>
          {children.map((child) => (
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
  )
}

export default DropdownCollapsed
