import React from 'react'
import './Home.css'
import { Navbar } from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import PropertyList from '../../components/PropertyList/PropertyList'


import { Featured } from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import { Footer } from '../../components/Footer/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse By Property Type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Home Guests love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>

        </div>

    </div>
  )
}
