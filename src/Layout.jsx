import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar/AppSidebar'
import MainHeader from './components/MainHeader/MainHeader'

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <MainHeader />
        {children}
      </main>
    </SidebarProvider>
  )
}
