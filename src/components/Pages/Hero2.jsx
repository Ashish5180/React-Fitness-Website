import React from 'react';
import { HiStar } from 'react-icons/hi';
import { FiFilm, FiChevronDown } from 'react-icons/fi';
import useInView from './Hook'; // Make sure this import is correct

const Hero2 = () => {
  const [setRef, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={setRef}
      className={`relative transition-opacity duration-1000 ease-out ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8 ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5">
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-black sm:text-8xl">
              Elevate Your Fitness 
                <span className="my-1 inline-block border-b-8 border-red-600 font-bold text-red-600"> Journey  </span>
              </h2>
              <p className="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque it.</p>
            </div>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <a href="#" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-red-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-red-800">Get Your Subscription</a>
              <a href="#" aria-label="" className="underline-offset-2 inline-flex items-center font-semibold text-black underline transition-colors duration-200 hover:underline">how it works</a>
            </div>
            <div className="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x">
              <div className="flex max-w-xs space-x-2 px-4">
                <HiStar className="h-12 w-12 text-emerald-600" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex max-w-xs space-x-2 px-4">
                <FiFilm className="h-12 w-12 text-orange-600" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <FiChevronDown className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" />
            <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-orange-400">
              <div className="absolute -left-10 -top-20 h-28 w-28 rounded-xl bg-white text-yellow-400">
                {/* <HiStar className='h-10 w-10'/> */}
              </div>
              <div className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl bg-white text-yellow-400">
                {/* <HiStar className='h-10 w-10'/> */}
              </div>
              <img className="-mb-20" src="https://st2.depositphotos.com/2972641/6060/i/450/depositphotos_60600635-stock-photo-closeup-of-a-muscular-young.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
