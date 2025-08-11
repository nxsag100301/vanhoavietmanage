import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Layout from './Layout'
import { BrowserRouter, HashRouter, Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
