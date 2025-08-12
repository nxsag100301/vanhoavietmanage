import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  // const { userInfo } = useSelector((state) => state.user)
  const isAuthenticated = true
  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />}</>
}

export default PrivateRoute
