import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

export default function Grid({ createUserAccount, isLoading, shippingDetails, isEdited }) {
  const [total, setTotal] = useState(0);
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    const savedTotal = localStorage.getItem("total");
    if (savedTotal) {
      setTotal(parseFloat(savedTotal));
    }
  }, []);

  useEffect(() => {
    if (orderedProducts.length > 0) {
      console.log("Ordered Products:", orderedProducts);
      sendEmail();
    }
  }, [orderedProducts]);

  const endPointUrl = 'https://techthoth-stripe-server.onrender.com/';

  const secretKey = 'sk_test_2IIZj9qvETFVO3EvJYJHAUQ100SCzRfnk5';

  const requestBodyObject = {
    stripeSecretKey: secretKey,
    productPrice: total * 100,
    productName: 'Lets create products Check out',
    mode: 'payment',
    paymentMethod: 'card',
    successUrl: 'https://lets-create-jewelry.vercel.app//checkout',
    cancelUrl: 'https://lets-create-jewelry.vercel.app/thank-you',
    quantity: 1,
    currency: 'usd'
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBodyObject)
  };

  const createProductObject = (products) => {
    return products.map(product => ({
      title: product.title,
      category: product.Category,
      quantity: product.quantity,
      color: product.color,
      price: product.price,
      tags: product.tags
    }));
  };

  const sendEmail = () => {
    let message = {
      shippingDetails,
      orderedProducts
    };

    emailjs
      .send(
        'service_0m74n6m',
        'template_0o464dn',
        message,
        'QjkTowdPcBd3Gc9il'
      )
      .then(
        (response) => {
          if (response.ok) {
            toast.success('Email sent successfully!');
          }
        },
        (error) => {
          toast.error('Failed to send email. Please try again.', error);
        }
      );
  };

  const sendOutCheckoutMails = () => {
    const orderRecord = localStorage.getItem('cartItems');
    if (orderRecord) {
      const orderProducts = JSON.parse(orderRecord);
      const productObjects = createProductObject(orderProducts);
      setOrderedProducts(productObjects);
    } else {
      toast.error('No items in the cart');
    }
  };

  const handlePayment = () => {
    let valid = true;
    for (let key in shippingDetails) {
      if (!shippingDetails[key].trim()) {
        valid = false;
        break;
      }
    }

    if (valid) {
      fetch(endPointUrl, options)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then(json => Promise.reject(json));
        })
        .then(({ url }) => {
          window.location.href = url;
        })
        .then(() => {
          sendOutCheckoutMails();
        })
        .catch(err => {
          console.error('An Error Occurred:', err.message);
        });
    } else {
      toast.error('Fill All Your Shipping Details First');
    }
  };

  return (
    <section className="flex flex-col bg-white p-5 mt-3">
      <main className="flex flex-row justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4">Product</h3>
          <p className="text-xs font-semibold mb-4">Subtotal</p>
          <p className="text-xs font-semibold mb-4">Total</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Subtotal</h3>
          <p className="text-xs font-medium mb-4">${total.toFixed(2)}</p>
          <p className="text-xl font-semibold mb-4 text-[#fcd34d]">
            ${total.toFixed(2)}
          </p>
        </div>
      </main>

      <hr className="h-px my-3 bg-gray-200 border-1 dark:bg-gray-400"></hr>
      <main className="flex flex-col gap-3">
        <div className="mt-4 w-full py-6 flex items-center justify-center">
          <button
            type="submit"
            className="w-[150px] h-[55px] rounded-lg bg-[#2EFAE7] font-serif text-lg text-white font-bold shadow-lg capitalize"
            onClick={handlePayment}
          >
            Check Out
          </button>
        </div>
      </main>
    </section>
  );
}