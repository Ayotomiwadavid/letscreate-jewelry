import React from 'react'
import Navbar from '../../shared/Navbar'
import Cart_Hero from '../../shared/hero/hero'
import Footer from '../../shared/Footer'
import ShippingDetails from './FormField'


export default function CheckOutPage({formFieldsOnchange, handleFormSubmission}) {
  return (
    <div>
      <Navbar/>
      <Cart_Hero title="CheckOut" />
      <ShippingDetails />
      <Footer />
    </div>
  )
}
