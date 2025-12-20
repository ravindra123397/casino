import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSlider from './Component/HeroSlider'
import DownloadAppSection from './Component/DownloadAppSection'
import TopGames from './Component/TopGames'
import LiveCasino from './Component/LiveCasino'
import CasinoInfoContent from './Component/CasinoInfoContent'
import PaymentMethods from './Component/PaymentMethods'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeroSlider/>
     <DownloadAppSection/>
     <TopGames/>
     <LiveCasino/>
     <CasinoInfoContent/>
     <PaymentMethods/>
    </>
  )
}

export default App
