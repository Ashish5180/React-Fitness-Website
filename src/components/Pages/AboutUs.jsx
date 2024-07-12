import React from 'react'
import img from '../../assets/3d-rendering-gym-trainer-character_23-2151545629-removebg-preview.png'
import PricingSection from './PriceCard'
function AboutUs() {
  return (
    <>
    <div class="mx-auto flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row md:h-screen  animate-slideInRight ">
  <div class="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
    <div class="mb-5 text-4xl font-bold text-red-500">Analytics App With a an Edge. Innovation.</div>
    <div class="mb-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi, magni repellat doloremque autem tempore facere adipisci nam ratione vitae quibusdam earum optio laudantium ipsum aliquid harum nulla.</div>
    <div class="">
      <p class="font-bold text-red-600">JAMES EDWARD</p>
      <p class="text-gray-500">CEO, Analytica</p>
    </div>
  </div>
  <div class="mr-10 mb-6 lg:mb-0">
    <img src="https://media.istockphoto.com/id/1407983911/photo/forex-diagrams-and-stock-market-rising-lines-with-numbers.jpg?s=612x612&w=0&k=20&c=zas1h6LR6v2iCvE7SWnVoZ_s7ZSiboN45UK0d5oMWac=" class="shadow-gray-800 w-full max-w-sm object-contain object-left shadow-lg" />
    <div class="p-4">
      <p class="mb-1 font-medium uppercase text-red-600">Who we are</p>
      <h5 class="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, temporibus!</h5>
      <div class="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  </div>
  <div class="">
    <img src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=" class="shadow-gray-800 w-full max-w-sm object-contain object-left shadow-lg" />
    <div class="p-4">
      <p class="mb-1 font-medium uppercase text-red-600">Our Practices</p>
      <h5 class="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, temporibus!</h5>
      <div class="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  </div>
</div>
{/* ---------------------------------------------------------------- */}


<section class="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
  <div class="max-w-md pr-20 lg:pt-28">
    <img src={img} alt="" className='md:w-[800px]' />
  </div>
  <div class="">
    <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-indigo-600/20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    </div>
    <h2 class="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">Strength  <span class="text-red-500">begins </span> in the mind, persists</h2>
    <div class="grid gap-y-12 gap-x-8 lg:grid-cols-2">
      <div>
        <p class="mb-6 border-l-4 border-red-600 pl-4 text-2xl leading-10">Customize Diet Plan</p>
        <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
      </div>
      <div>
        <p class="mb-6 border-l-4 border-red-600 pl-4 text-2xl leading-10">Strength Training</p>
        <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
      </div>
      <div>
        <p class="mb-6 border-l-4 border-red-600 pl-4 text-2xl leading-10">Weight Lifting</p>
        <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
      </div>
      <div>
        <p class="mb-6 border-l-4 border-red-600 pl-4 text-2xl leading-10">Muscle Building</p>
        <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
      </div>
    </div>
  </div>
</section>
{/* ------------------------------------------------------ */}
<section class="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
  <div class="lg:w-1/2 lg:pr-8">
    <div class="">
      <button class="mr-4 mb-2 rounded-full bg-red-600 px-2 py-1 font-medium text-white transition">About us</button>
    
    </div>
    <div class="mt-4">
      <h2 class="text-3xl font-medium text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur fuga odio laudantium dolor, dolorum magnam. Ducimus quasi, odio harum eum repellendus, minus placeat fugit natus omnis neque ea maiores, reiciendis culpa!</p>
    </div>
  </div>
  <div class="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
    <img class="border-blue-600/10 rounded-3xl border shadow-md" src="https://c4.wallpaperflare.com/wallpaper/199/924/33/muscle-muscle-bodybuilding-press-wallpaper-preview.jpg" alt="" />
  </div>
</section>

 {/* ---------------------------------------------------------- */}
 <PricingSection/>
    </>
  )
}

export default AboutUs