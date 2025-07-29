import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import Banner from '../components/Banner';
const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sly59sn',
      'template_wax7k5o',
      form.current,
      'i7VQQ9IrpGXNz-H3B'
    )
    .then((result) => {
      setSent(true);
      if (form.current) {
        form.current.reset();
      }
    }, (error) => {
      setError(error.text);
    });
  };

  return (
    <div><Banner image="https://erlendissolutions.com/assets/img/con-ban.png">
                              {/* <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1> */}
                           </Banner>
    <div className=' min-h-screen p-8'>
        
    <div className="flex flex-col md:flex-row bg-gray-100 p-10 rounded-lg shadow-lg">
      <form ref={form} onSubmit={sendEmail} className="flex-1 mr-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input type="text" name="first_name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input type="text" name="last_name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Email *</label>
          <input type="email" name="user_email" required className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Message *</label>
          <textarea name="message" required className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
        </div>

        <button type="submit" className="bg-cyan-400 text-white px-6 py-2 rounded shadow hover:bg-cyan-500">
          Submit
        </button>

        {sent && <p className="mt-4 text-green-600">Message sent successfully!</p>}
        {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      </form>

      <div className="border-l border-cyan-500 pl-10 mt-8 md:mt-0 text-gray-700">
        <h3 className="font-bold text-lg mb-2">OUR OFFICE ADDRESS</h3>
        <p className="mb-4">
          EN 66 (1ST FLOOR), BESIDES TWIN TOWER, WEBEL MORE, Near HDFC BANK, <br /> Sector V, Kolkata, West Bengal 700091.
        </p>

        <h3 className="font-bold text-lg mb-2">OUR CONTACT</h3>
        <p className="mb-2">📞 +91 8617708345, +91 9674723042</p>
        <p className="mb-2">✉️ info@erlendissolutions.com</p>
        <p className="mb-2">🌐 www.erlendissolutions.com</p>
      </div>
       
    </div>
    <div className="mt-10">
        <GoogleMapEmbed />
      </div>
    </div>
    </div>
  );
};

export default Contact;
