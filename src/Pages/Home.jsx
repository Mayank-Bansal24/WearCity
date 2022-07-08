import React from 'react'
import { Search } from '@material-ui/icons'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Categories from '../components/Categories'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Slider/>
        <Categories/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home