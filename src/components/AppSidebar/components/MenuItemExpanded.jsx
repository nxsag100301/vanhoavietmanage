import { SidebarMenuButton } from '@/components/ui/sidebar'
import { Link } from 'react-router-dom'

const MenuItemExpanded = ({ url, title, icon }) => {
  return (
    <SidebarMenuButton asChild>
      <Link to={url} className='flex items-center'>
        <img src={icon} alt={title} className='mr-4 w-5 h-5 2xl:h-6 2xl:w-6' />
        <span className='text-body2-medium 2xl:text-subtitle1 text-black'>
          {title}
        </span>
      </Link>
    </SidebarMenuButton>
  )
}

export default MenuItemExpanded
