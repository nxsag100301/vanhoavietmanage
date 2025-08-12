import { useState, useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [isSupported, setIsSupported] = useState(true)

  useEffect(() => {
    function checkWidth() {
      setIsSupported(window.innerWidth >= 1280) // xl breakpoint
    }
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  if (!isSupported) {
    return (
      <div className='flex justify-center items-center h-screen text-center p-4'>
        <h1 className='text-2xl font-semibold'>
          Thiết bị này không được hỗ trợ
        </h1>
        <p>
          Vui lòng sử dụng thiết bị có màn hình lớn hơn hoặc desktop để trải
          nghiệm tốt nhất.
        </p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
