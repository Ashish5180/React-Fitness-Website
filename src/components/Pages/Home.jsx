// src/Hero.js
import React from 'react';
import Hero2 from './Hero2';
import ClientTestimonial from './ClientTestimonial';
import Hero3 from './Hero3'
const Home = () => {
  return (
    <>
    <div className="relative h-screen bg-black text-white animate-fadeIn">
      <img
        src="https://images4.alphacoders.com/805/805233.jpg"
        alt="Hero Background"
        className="absolute inset-0 md:w-full md:h-screen h-[600px] object-cover opacity-50"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-bold">
          WHERE <span className="text-red-600">HARD</span> WORK MEETS SUCCESS
        </h1>
        <p className="mt-4 text-lg max-w-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo tenetur.
        </p>
        <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 animate-bounce">
          GET STARTED
        </button>
      </div>
    </div>
   <Hero2/>
   <Hero3/>
   <ClientTestimonial/>
    </>
  );
};

export default Home;
