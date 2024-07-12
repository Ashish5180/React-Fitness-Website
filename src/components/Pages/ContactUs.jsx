import React, { useState } from 'react';
import SuccessModal from './SuccessModal'; // Adjust the path as per your project structure

function ContactUs() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation here if needed
    if (!email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate form submission
    try {
      // Your form submission logic here

      // Assuming form submission is successful:
      setSubmitted(true);
      // Clear form fields
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  const handleCloseModal = () => {
    setSubmitted(false);
  };

  return (
    <div className="font-sans text-base text-gray-900 sm:px-10 h-screen">
      <div className="text-base text-gray-900">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
            <h1 className="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">Contact us</h1>
            <div className="text-lg sm:text-xl xl:text-xl">
              <div className="text-gray-900">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
        <form onSubmit={handleFormSubmit} className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
          <div className="mb-4">
            <label htmlFor="email" className="text mb-2 block font-medium">Your e-mail:</label>
            <input
              id="email"
              type="email"
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="text mb-2 block font-medium">Subject:</label>
            <input
              id="subject"
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text mb-2 block font-medium">Message:</label>
            <textarea
              id="message"
              className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="flex-1"></div>
            <button type="submit" className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700">
              Send message
            </button>
          </div>
        </form>
        <div className="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
          <div>
            <p className="mb-4 font-medium border-b pb-2">OFFICE HOURS</p>
            <p className="mb-4">Monday – Thursday: 08:00 – 16:00</p>
            <p className="mb-4">Friday: 08:00 - 15:00</p>
            <p className="mb-4">Weekend: Closed</p>
            <p className="mb-4">
              Email:
              <a href="#" className="font-semibold underline">support@apps.io</a>
            </p>
            <p className="mb-4">
              Phone:
              <a href="#" className="font-semibold underline">+46 (0) 10-32 32 322</a>
            </p>
            <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
            <p className="mb-4">Org.no: 63452-2832</p>
            <p className="mb-4">VAT no: 32353</p>
          </div>
        </div>
      </div>
      {submitted && <SuccessModal onClose={handleCloseModal} />}
    </div>
  );
}

export default ContactUs;
