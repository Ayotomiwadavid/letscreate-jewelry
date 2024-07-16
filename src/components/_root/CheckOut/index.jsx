import React from 'react'
import Navbar from '../../shared/Navbar'
import Cart_Hero from '../../shared/hero/hero'
import Footer from '../../shared/Footer'
import ShippingDetails from './FormField'


export default function CheckOutPage() {
  return (
    <div>
      <Navbar />
      <Cart_Hero />
      <ShippingDetails />
      <Footer />
    </div>
  )
}
