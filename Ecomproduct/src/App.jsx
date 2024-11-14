import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <Header />
        <div className='w-full min-h-screen bg-white border'>
          <Outlet />
        </div>
      <Footer />
    </>
  )
}

export default App
