import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import ProfilePic from './Components/ProfilePic'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'
import ProgressBar from './Components/ProgressBar'
function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='w-screen'>
      <Header />
      <SideBar />
      <div className='ml-[90px] 
      grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 pt-5 mt-[90px]'>
          <Introduction />
          <About />
          <Services />
        </div>
        <div className='hidden md:block'>
          <ProgressBar />
          <ProfilePic />
        </div>
      </div>
    </div>
  )
}


export default App
