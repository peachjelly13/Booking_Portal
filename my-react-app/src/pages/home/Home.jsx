import React from 'react'
import './Home.css'
import { Navbar } from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <div className="homeContainer"></div>

    </div>
  )
}
