import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import BannerImages from './components/bannerImages'
import Service from './components/ourServices'
import Vision from './components/ourVision'
import Mission from './components/ourMission'

function App() {

  return (
    <>
    <Navbar/>
    <BannerImages/>
    <Service/>
    <Vision/>
    <Mission/>
    </>
  )
}

export default App
