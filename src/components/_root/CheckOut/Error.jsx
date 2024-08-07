import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const PaymentError = () => {
  return (
    <section className='h-lvh w-full bg-[#fff] flex items-center justify-center'>
      <div className='w-1/2 h-[70%] bg-[#f5f5f5] shadow-2xl rounded-lg flex flex-col items-center justify-center gap-5'>
        <span className='py-1 w-[200px] bg-red-900 rounded-full'></span>
        <aside className='py-10 px-[50px] gap- flex flex-col items-center justify-center'>
          <h1 className='font-extrabold text-center text-5xl text-[#C9C9C9] uppercase'>OOPS!</h1>

          <p className='text-2xl text-center font-sans capitalize text-[#C9C9C9] mt-10'>Something went wrong</p>
          <p className='text-2xl text-center font-sans capitalize text-[#C9C9C9]'>The payment could not be completed</p>
        </aside>

        <Link to='/' className='bg-red-900 text-white capitalize font-bold h-[50px] px-4 text-center flex items-center justify-center rounded-md'>Go back home</Link>
      </div>
    </section>
  )
}

export default PaymentError
