import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Grid({createUserAccount, isLoading, email, name, phone, isEdited}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedTotal = localStorage.getItem("total");
    if (savedTotal) {
      setTotal(parseFloat(savedTotal));
    }
  }, []);

  //Stripe backend server endpoint
  const endPointUrl = 'http://localhost:5001/';

  //stripe seceret key
  const seceretKey = 'sk_test_2IIZj9qvETFVO3EvJYJHAUQ100SCzRfnk5'

  //request body onject
  const requestBodyObject = {
    stripeSecretKey: seceretKey,
    productPrice: total * 100,
    productName: 'Lets create products Check out',
    mode: 'payment',
    paymentMethod: 'card',
    successUrl: 'http://localhost:5173/checkout',
    cancelUrl: 'http://localhost:5173/checkout',
    quantity: 1,
    currency: 'usd'
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBodyObject)
  }

  const handlePayment = () => {
    fetch(endPointUrl, options)

    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then(json => Promise.reject(json));
    })
    .then(({url}) => {
      window.location.href = url;
    })
    .catch(err => {
      console.log('An Error Occurred:', err.message);
    })
  }


  return (
    <section className="flex flex-col bg-white p-5 mt-3">
      <main className="flex flex-row justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4">Product</h3>
          {/* <p className="text-xs font-medium mb-4 text-[#94a3b8]">
              MIRAGE MR-AT172 285/65
            </p> */}
          <p className="text-xs font-semibold mb-4">Subtotal</p>
          <p className="text-xs font-semibold mb-4">Total</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Subtotal</h3>
          {/* <p className="text-xs font-medium mb-4">${total.toFixed(2)}</p> */}
          <p className="text-xs font-medium mb-4">${total.toFixed(2)}</p>
          <p className="text-xl font-semibold mb-4 text-[#fcd34d]">
            ${total.toFixed(2)}
          </p>
        </div>
      </main>

      <hr className="h-px my-3 bg-gray-200 border-1 dark:bg-gray-400"></hr>
      <main className="flex flex-col gap-3">
        {/* <section>
          <div className="flex flex-row gap-3">
            <input type="radio" className="bg-gray-50" />
            <p className="text-sm">Direct Bank Transfer</p>
          </div>
          <p className="text-sm md:w-[24rem] font-normal text-[#9ca3af]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </section>

        <section>
          <div className="flex flex-row gap-3">
            <input type="radio" className="bg-dark" />
            <p className="text-[#9ca3af] text-sm">Direct Bank Transfer</p>
          </div>
          <div className="flex flex-row gap-3">
            <input type="radio" className="bg-dark" />
            <p className="text-[#9ca3af] text-sm">Cash On Delivary</p>
          </div>
        </section>

        <p className="text-sm md:w-[24rem] font-normal text-[#9ca3af]">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className="font-bold text-black">privacy policy.</span>
        </p> */}

        <div className="mt-4 w-full py-6 flex items-center justify-center">
          <button type="submit" className="w-[150px] h-[55px] rounded-lg bg-[#2EFAE7] font-serif text-lg text-white font-bold shadow-lg capitalize" onClick={handlePayment}>check out</button>
        </div>
      </main>
    </section>
  );
}
