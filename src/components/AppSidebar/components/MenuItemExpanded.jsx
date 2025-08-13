import { SidebarMenuButton } from '@/components/ui/sidebar'
import { Link } from 'react-router-dom'

const MenuItemExpanded = ({ url, title, icon }) => {
  return (
    <SidebarMenuButton asChild>
      <Link to={url} className='flex items-center'>
        <img src={icon} alt={title} className='mr-4 h-6 w-6' />
        <span className='text-subtitle1 text-black'>{title}</span>
      </Link>
    </SidebarMenuButton>
  )
}

export default MenuItemExpanded
