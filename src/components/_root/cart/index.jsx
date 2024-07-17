import React from 'react'
import Cart from './cart'
import Navbar from '../../shared/Navbar'
import Cart_Hero from '../../shared/hero/hero'
import Footer from '../../shared/Footer'

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Cart_Hero title="Cart" />
      <Cart />
      <Footer />
    </div>
  )
}
