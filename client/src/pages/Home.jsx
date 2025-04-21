import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProductTwo from '../components/Product2'
import SuggestProduct from '../components/SuggestProduct'

const Home = () => {
    return <>
        <div className='bg-slate-800'>
            <Navbar />
            <Hero />
            <ProductTwo />
            <SuggestProduct />
            <Footer />
        </div>
    </>
}

export default Home