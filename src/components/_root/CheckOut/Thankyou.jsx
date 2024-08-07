import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Thankyou = () => {

  const OrderedProduct = JSON.parse(localStorage.getItem('cartItems'));
  const shippingDetails = JSON.parse(localStorage.getItem('shippingDetails'));
  const [adminMessage, setAdminMessage] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    province: '',
    streetAddress: '',
    zipCode: '',
    town: '',
    companyName: '',
    additionalInfo: '',
    title: '',
    Price: '',
    color: '',
    quantity: '',
    Tags: '',
    Category: '',
  });


  const [productOrdered, setProductOrdered] = useState([]);

  useEffect(() => {
    if (OrderedProduct && OrderedProduct.length > 0) {
      setProductOrdered(OrderedProduct.map(product => ({
        title: product.title,
        Price: product.price,
        color: product.color,
        quantity: product.quantity,
        Tags: product.Tags,
        Category: product.Category
      })));
    }
  }, []);


  //========================================
  //=====SETTING UP MESSAGE DETAILS=========
  //========================================

  const { email, firstName, lastName, phone, country, province, streetAddress, zipCode, town, companyName, additionalInfo } = shippingDetails;

  
  const generateCombinedOrderSummary = (product) => {
    return product.map(product => {
      const { title, quantity, color, Category, Price } = product;
      return `${quantity} ${color} ${title}(s) in the category of ${Category} at $${Price}`;
    }).join(', and ') + '.';
  }
  
  const newMessage = generateCombinedOrderSummary(productOrdered);

  console.log(newMessage);


  //========================================
  //=====SETTING UP ADMIN MESSAGE===========
  //========================================

  useEffect(() => {
    setAdminMessage((prevValue) => {
      return {
        ...prevValue,
        email,
        firstName,
        lastName,
        phone,
        country,
        province,
        streetAddress,
        zipCode,
        town,
        companyName,
        additionalInfo,
        message: newMessage,
      }
    })
  }, []);


  emailjs.init('1VFd4PpZgAFZUZuju');

  const sendAdminMail = () => {
    emailjs.send('service_91h0v7i', 'template_uqe3q9p', adminMessage).then(
      (response) => {
      },
      (error) => {
        console.error('FAILED... An error occured!');
      },
    );
  }

  const sendUserMail = () => {
    emailjs.send('service_91h0v7i', 'template_hcc4y26', adminMessage).then(
      (response) => {
        localStorage.removeItem('shippingDetails')
        localStorage.removeItem('cartItems')
      },
      (error) => {
        console.error('FAILED... An error occured!');
      },
    );
  }

  const sendBothMails = () => {
    sendUserMail();
    sendAdminMail();
  }

  useEffect(() => {
    sendBothMails();
  }, []);


  return (
    <section className='h-lvh w-full bg-[#fff] flex items-center justify-center'>
      <div className='w-1/2 h-[70%] bg-[#f5f5f5] shadow-2xl rounded-lg flex flex-col items-center justify-center gap-5'>
        <span className='py-1 w-[200px] bg-[#2DCE71] rounded-full'></span>
        <aside className='py-10 px-[50px] gap- flex flex-col items-center justify-center'>
          <h1 className='font-extrabold text-5xl text-[#C9C9C9] uppercase'>Thank you</h1>

          <p className='text-2xl font-sans capitalize text-[#C9C9C9] mt-10'>your order</p>
          <p className='text-2xl font-sans capitalize text-[#C9C9C9]'>is being processed</p>
        </aside>

        <Link to='/' className='bg-[#2DCE71] text-white capitalize font-bold h-[50px] px-4 text-center flex items-center justify-center rounded-md'>Continue shopping</Link>
      </div>
    </section>
  )
}

export default Thankyou
