import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookAppointment = () => {
  const [dateType, setDateType] = useState(false);

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data using EmailJS
    emailjs.send('service_wh5ez9o', 'template_rz6lt0k', {
      from_name: name,
      from_email: email,
      phone: phone,
      branch: branch,
      message: message
    }, 'q--bgkeW6MLsEpPxm')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Form submitted successfully!');
        // Handle successful submission (e.g., show a success message)
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
        setBranch('');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        // Handle error (e.g., show an error message)
        toast.success('Form Failed To Submit!');
      });
  };


  return (
    <div
      className="w-full pt-10 pb-10 px-6 text-white bg-[#2f2f2f] rounded-none md:w-1/2 md:pt-6 md:rounded"
      id="book-appointment"
    >
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
          Book Appointment
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5 mb-5 md:mb-4">
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="Your Name *"
              value={name} onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="Phone number *" 
              value={phone} onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            {/* <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            /> */}

            {/* <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type={dateType ? "datetime-local" : "text"}
              placeholder="Appointment Date & Time"
              onFocus={() => setDateType((prevVal) => !prevVal)}
              onBlur={() => setDateType((prevVal) => !prevVal)}
            /> */}
          </div>
        </div>
        <div className="text-[#333] mb-5 md:mb-4">
          <select className="p-1 rounded outline-none" name="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option value="select branch">Select Branch</option>
            <option value="uyo">Uyo</option>
            <option value="port harcourt">Port Harcourt</option>
            <option value="abia">Asaba,Asaba  </option>
            <option value="abuja">Aba  </option>
            <option value="abuja">Lagos</option>
            <option value="abuja">Abuja</option>
          </select>
        </div>
        <div>
          <textarea
            className="w-full h-40 p-2 mb-5 text-sm text-white bg-transparent border rounded placeholder-white md:mb-4"
            placeholder="Notes (if possible, tell us what your appointment is for)"
            value={message} onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="px-10 py-3 text-lg font-bold uppercase border border-white rounded-full transition-colors hover:bg-[#045544]">
            Send
            <ToastContainer />
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
