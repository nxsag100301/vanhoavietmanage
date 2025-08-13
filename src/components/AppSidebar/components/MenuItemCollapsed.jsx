import { Link } from 'react-router-dom'
import { SidebarMenuButton } from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'

const MenuItemCollapsed = ({ url, title, icon }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <SidebarMenuButton asChild>
          <Link to={url} className='flex items-center justify-center'>
            <img src={icon} alt={title} className='h-6 w-6' />
          </Link>
        </SidebarMenuButton>
      </TooltipTrigger>
      <TooltipContent side='right'>{title}</TooltipContent>
    </Tooltip>
  )
}

export default MenuItemCollapsed
