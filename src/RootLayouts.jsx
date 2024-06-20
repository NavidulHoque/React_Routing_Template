import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <div className='grid grid-rows-[70px_auto_90px] h-screen'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayouts
