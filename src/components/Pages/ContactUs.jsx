import React from 'react'; // Import React library

// ContactUs component
const ContactUs = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100"> {/* Main container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"> {/* Contact form container */}
        <h2 className="text-2xl mb-4 font-semibold">Contact Us</h2> {/* Title */}
        <form action="https://formspree.io/f/myyrbodg" method="POST"> {/* Form with Formspree endpoint */}
          <div className="mb-4"> {/* Name input */}
            <label htmlFor="name" className="block mb-2">Name</label> {/* Label for name */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            /> {/* Name input field */}
          </div>
          <div className="mb-4"> {/* Phone number input */}
            <label htmlFor="phone" className="block mb-2">Phone Number</label> {/* Label for phone number */}
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            /> {/* Phone number input field */}
          </div>
          <div className="mb-4"> {/* Email input */}
            <label htmlFor="email" className="block mb-2">Email</label> {/* Label for email */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            /> {/* Email input field */}
          </div>
          <div className="mb-4"> {/* Message input */}
            <label htmlFor="message" className="block mb-2">Message</label> {/* Label for message */}
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            ></textarea> {/* Message input field */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit {/* Submit button */}
          </button>
        </form> {/* End of form */}
      </div> {/* End of contact form container */}
    </div>
    //  {/* End of main container */}
  );
};

export default ContactUs; // Export ContactUs component
