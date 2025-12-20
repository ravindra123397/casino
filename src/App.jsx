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
import LoanApplicationForm from './Component/LoanApplicationForm'
import Navbar from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <HeroSlider/>
     <DownloadAppSection/>
     <TopGames/>
     <LiveCasino/>
     <LoanApplicationForm/>
     <CasinoInfoContent/>
     <PaymentMethods/>
    </>
  )
}

export default App
