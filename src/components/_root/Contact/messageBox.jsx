import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export default function MessageBox() {

  const [contactMessage, setContactMessage] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setContactMessage((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })

    console.log(contactMessage)
  }

  const validateInputs = () => {
    const { name, phone, subject, message } = contactMessage;

    if (!name || !phone || !subject || !message) {
      toast.error("All fields are required");
      return false;
    }

    return true;
  };

  const handleInquiry = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    emailjs.init('QjkTowdPcBd3Gc9il');
    emailjs.send('service_pkuthqc', 'template_0o464dn', contactMessage).then(
      (response) => {
        toast.success("Thanks, we'll respond very soon");
      },
      (error) => {
        toast.error('FAILED... An error occured!'); 
      },
    );
  };

  return (
    <div className="flex flex-col text-center relative mx-3 md:mx-12 mb-16 justify-center items-center mt-5">
      <div className="relative mb-8 justify-center items-center">
        <div className="text-black text-5xl font-bold font-['Cormorant']">
          Send A Message
        </div>
        <div className="flex flex-col mt-6 gap-10">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
              placeholder="Your Name"
              name="name"
              onChange={handleInputChange}
            />
            <input
              className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
              placeholder="Phone"
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <input
            className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
            placeholder="Subject"
            name="subject"
            onChange={handleInputChange}
          />
          <textarea
            className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
            placeholder="Message"
            name="message"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button onClick={handleInquiry} className="font-bold bg-primary text-white hover:bg-white hover:text-primary py-3 text-center w-full lg:w-[15em] rounded-md">
        SEND MESSAGE
      </button>
    </div>
  );
}
