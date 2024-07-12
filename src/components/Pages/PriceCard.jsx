import React from 'react';

const PricingSection = () => {
  return (
    <div className="pt-16 pb-8 text-center leading-8 text-gray-800 md:pb-16 lg:pt-32">
      <div className="mb-20 text-center">
        <div className="mb-4 text-gray-800">
          <h2 className="text-4xl font-bold md:text-5xl md:leading-none">Get Subscription</h2>
        </div>
        <p className="mx-auto mb-8 max-w-3xl text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto molestias nemo, alias quaerat expedita.</p>
        <div className="text-gray-800">
          <div className="mb-4 inline-block">
            <a href="#" className="relative flex cursor-pointer items-center pr-12 text-base leading-tight text-purple-600 md:text-xl">
              See All Features
              <span className="ml-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center md:grid-cols-3">
        <PricingCard title="Free" price="$0 / month" features={['Access to Basic machine', '1 Users', '1 Brand']} buttonLabel="Get Started" />
        <PricingCard title="Starter" price="$79 / month" features={['Acess to all machine ', '1 Users', '1 Brand']} buttonLabel="Free Trial" mostPicked />
        <PricingCard title="Team" price="$279 / month" features={['Acces all Features', '25 Users', '1 Brand']} buttonLabel="Free Trial" />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, features, buttonLabel, mostPicked }) => {
  return (
    <div className="relative text-gray-800">
      {mostPicked && (
        <div className="absolute top-0 right-0 z-10 -mt-5 -mr-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400 px-2 font-bold text-white">
          <p className="text-base leading-tight">Most Picked</p>
        </div>
      )}
      <div className="relative mx-auto flex max-w-sm flex-col overflow-hidden rounded-md border border-purple-100">
        <div className={`bg-${mostPicked ? 'purple-500 text-white' : 'purple-50'} py-2 text-xl`}>{title}</div>
        <div className="py-10 px-4 font-semibold">
          <p className="text-xl leading-tight">{price}</p>
        </div>
        <p className="mx-auto h-24 max-w-xs px-6 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="relative mx-4 mb-2 rounded-md bg-gray-50">
              <svg className="absolute ml-4 block h-full align-middle" width="17.5px" viewBox="0 0 18 14" fill="none">
                <path d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z" fill="currentColor" className="text-purple-600" />
              </svg>
              <p className="py-2 text-xl font-semibold">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="my-10 px-2">
          <a className={`block cursor-pointer rounded ${mostPicked ? 'bg-purple-600 text-white' : 'bg-gray-800 text-white'} py-4 px-10 text-base leading-tight duration-200 ease-in-out md:inline-block lg:py-4`} href="#">
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
