import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import {
  HomePage,
  ListArea,
  Notifications,
  Revenue,
  Customer,
  Expense,
  ProductList,
  Identify,
  Orders,
  Combo,
  DepartmentList,
  Staff,
  Assets,
  Contact,
  Community,
  Login,
  Register,
  Profile
} from '@/pages'
import Layout from '@/Layout'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Layout sidebar*/}
      <Route
        path='/*'
        element={
          <Layout>
            <Routes>
              <Route element={<PrivateRoute />}>
                {/* Thêm private route vào đây */}

                {/* <Route path='/' element={<HomePage />} /> */}
                <Route path='/listarea' element={<ListArea />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/revenue' element={<Revenue />} />
                <Route path='/customer' element={<Customer />} />
                <Route path='/expense' element={<Expense />} />

                {/* Profile */}
                <Route path='/profile' element={<Profile />} />

                {/* Products */}
                <Route path='/products/list' element={<ProductList />} />
                <Route path='/products/identify' element={<Identify />} />
                <Route path='/products/orders' element={<Orders />} />
                <Route path='/products/combo' element={<Combo />} />

                {/* Department */}
                <Route path='/department/list' element={<DepartmentList />} />
                <Route path='/department/staff' element={<Staff />} />
                <Route path='/department/assets' element={<Assets />} />

                {/* Help */}
                <Route path='/contact' element={<Contact />} />
                <Route path='/community' element={<Community />} />
              </Route>
            </Routes>
          </Layout>
        }
      />
    </Routes>
  )
}

export default AppRoutes
