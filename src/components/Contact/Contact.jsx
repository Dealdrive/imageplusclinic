import { useState } from "react";
import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import locationIcon from "../../assets/map-pin.svg";
import phoneIcon from "../../assets/phone.svg";

const Contact = () => {
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
    <section>
      <div className="py-56 bg-pages-heroBg bg-no-repeat bg-cover bg-center" />
      <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center mb-12">
          <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
            Contact us
          </h2>
          <div className="w-10 h-[3px] bg-[#f97729]" />
        </div>

        <div className="flex flex-col justify-center space-y-6 px-4 mb-20 text-lg md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:text-xl lg:space-x-20">
          <div className="flex flex-col items-center text-center md:pr-4 md:border-r md:border-gray-300 lg:pr-16">
            <div className="mb-3">
              <img
                className="w-9 h-9 md:w-12 md:h-12"
                src={locationIcon}
                alt="Location Icon"
              />
            </div>
            <div>
              <p>
                <b>Uyo: </b> No. 12 Willam street(Amaecom Global House) After Nepa line by Aka road, Uyo
              </p>
              <p>
                <b>Port Harcourt: </b> No. 12 Rumola/Stadium Link Road, Port Harcourt
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                className="w-9 h-9 md:w-12 md:h-12"
                src={phoneIcon}
                alt="Location Icon"
              />
            </div>
            <div>
              <p>
                <span className="font-bold">Phone:</span>{" "}
                <Link to="tel:+2349071259643">+2349071259643</Link>
              </p>
              <p>
                <span className="font-bold">Optometrist:</span>{" "}
                <Link to="tel:+2347030729996">+2347030729996</Link>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <Link to="mailto:imageplusng@gmail.com">
                  imageplusng@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Book Appointment */}
        <div id="book-appointment">
          <div className="flex flex-col items-center mb-12">
            <h2 className="mb-3 text-center text-4xl font-bold uppercase md:text-5xl">
              Request a Consultation
            </h2>
            <div className="w-10 h-[3px] bg-[#f97729]" />
          </div>

          <form ref={form} onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-5 mb-5 md:mb-4">
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full border outline-none text-sm rounded"
              type="text"
              placeholder="Your Name *"
              value={name} onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-2 w-full border outline-none text-sm rounded"
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
            className="w-full h-40 p-2 mb-5 text-sm border rounded md:mb-4"
            placeholder="Notes (if possible, tell us what your appointment is for)"
            value={message} onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="px-10 py-3 text-lg font-bold uppercase border rounded-full transition-colors hover:bg-[#045544]">
            Send
            <ToastContainer />
          </button>
        </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
