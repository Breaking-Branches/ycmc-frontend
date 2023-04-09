import React from 'react'
import Hero from '../components/home/Hero'
import Footer from '../components/home/Footer'
import  ScanHomePage from '../components/scan/ScanHomePage';

export default function HomePage() {
  return (
    <div>

    <Hero des="Wanna See code similarity between two github repo ?, YCMC is a tool which checks code similarity between two repo files" ></Hero>
    <ScanHomePage></ScanHomePage>
    <Footer></Footer>

    </div>
  )
}
