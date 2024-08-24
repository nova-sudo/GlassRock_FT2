import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";

import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"
import t4 from "../assets/t4.jpg"
import t5 from "../assets/t5.jpg"
import t6 from "../assets/t6.jpg"
import s1 from "../assets/s1.jpg"
import h1 from "../assets/h1.jpg"
import h2 from "../assets/h2.jpeg"

import glassrock2 from "../assets/glassrock.jpg"

function Mineral(){
    const [activeIndexAccordion1, setActiveIndexAccordion1] = useState(null);
  const [activeIndexAccordion2, setActiveIndexAccordion2] = useState(null);

  const toggleAccordion1 = (index) => {
    setActiveIndexAccordion1((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const toggleAccordion2 = (index) => {
    setActiveIndexAccordion2((prevIndex) =>
      prevIndex === index ? null : index
    );
  };
  
    const accordionData1 = [
      {
        question: "What is GlassWool?",
        answer:
          "Glass wool is made of sand, recycled glass, limestone and soda ash. These are the same ingredients that are used to make familiar glass objects such as window panes or glass bottles. The glass is spun to form millions of fine fibers.",
      },
      {
        question: "Main Usage",
        answer:
          "Loft insulation, Cavity wall insulation, Sound insulation within partitions and floors",
      },
      {
        question: "Characteristics",
        answer:
          "Long fiber, giving good tear strength, Suitable for temperatures up to 400°C, Non-combustible, Lightweight, Available in rolls and slabs",
      },
    ];


    const accordionData2 = [
        {
          question: "What is Rock Wool?",
          answer:
            "Rock wool is mainly made of volcanic rock, typically basalt and/or dolomite. An increasing proportion is composed of recycled materials made from slag, and a waste product made from blast furnaces.",
        },
        {
          question: "Main Usage",
          answer:
            "Thermal insulation, Fire resistance, High temperature applications, Acoustic insulation, High compressive strength applications",
        },
        {
          question: "Characteristics",
          answer:
            "Short fiber-compressive strength, Suitable for temperature up to 7500 C, Non-combustible, Denser than Glass wool, Available in the form of boards, blankets and wire mesh, High compressive strength",
        },
      ];
      
  
    return(

 <body>
    <Navbar/>


    

<section class="bg-white dark:bg-gray-900 -translate-y-12">
    <div class=" px-4  mx-auto max-w-screen-xl text-center ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Mineral Wool</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"> Our Mineral Wool's Advantageous Properties</p>
     
    </div>


</section>


   
<div id="default-carousel" class="relative -translate-y-10  px-20 mt-5" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden shadow-md text-center   rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class=" duration-700 ease-in-out " data-carousel-item>
            <img src={t1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>

            <div class=" absolute py-8 px-4 mx-auto max-w-screen-xl text-center left-14 lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Thermal Conductivity</h1>
        <p class="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Thermal conductivity λ varies depending on the temperature of the element to be insulated. At normal temperatures Rock wool has a thermal conductivity between 0,035 and 0,040 W/mK. The advantage of Rock wool over other insulation materials is preserving its properties for a long time, even during serious fire. This capability prevents other materials behind the Rock wool from overheating or even self-igniting.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
        </div>
    </div>

        </div>
        {/* <!-- Item 2 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={t2} class="absolute block w-full -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2" alt="..."/>

            <div class=" absolute py-8 px-4 mx-auto max-w-screen-xl text-center  left-14 lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Neutrality</h1>
        <p class="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Mineral wool fibers are inorganic biologically inert materials made out of natural igneous rocks – in addition to sand and silica in case of Glass wool – which forms an unfavorable medium for the growth of fungi, bacteria, vermin, and pests. These fibers are also free of asbestos.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
        </div>
    </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={t3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div className="absolute bg-gray-800 opacity-25 w-full h-full   left-14"></div>
            <div class=" absolute py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Sound and vibrations absorption</h1>
        <p class="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">The energy of sound waves absorbed by Rock wool and Glass wool fibers due to the crisscrossed fibers and air pockets. This structure makes Rock wool and Glass wool one of the best sound absorbing insulation for building and industrial applications. Besides the advantage of light weight, Rock wool can also be used to control vibrations caused by sources such as traffic, ventilating systems, heavy machines or similar.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
        </div>
    </div>  
        </div>
        {/* <!-- Item 4 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={s1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div class=" absolute py-8 px-4 mx-auto max-w-screen-xl text-center  left-14 lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Fire Protection</h1>
        <p class="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">GlassRock mineral wool insulation is a non-combustible materials that doesn’t burn and can resist temperature over 750°C for Rock wool and 400°C for Glass wool.
Even after the binder has evaporated because of fire, Rock wool retains both its thermal conductivity and fire protection capability even when temperature, as in the case of fire, reaches over 900 °C.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
        </div>
    </div>
        </div>

        {/* <!-- Item 5 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={t4}class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div class=" absolute py-8 px-4 mx-auto max-w-screen-xl  left-14 text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-amber-900 md:text-5xl lg:text-6xl dark:text-white">Water Repellency</h1>
        <p class="mb-8 text-lg font-normal text-amber-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">That moisture inside insulation reduces thermal conductivity performance. When exposed to water or rain, Rock wool can sometimes look like it is wet throughout. In fact water does not penetrate the product.
Even if water is going into the core of Rock wool or Glass wool, after a certain time the water evaporates and the fibers dry out, as the material is itself diffusing. After drying out, the product completely recovers its properties.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
        </div>
    </div>
            
        </div>

         {/* <!-- Item 6 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={t5} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div class=" absolute py-8 px-4 mx-auto max-w-screen-xl  left-14 text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Durability</h1>
        <p class="mb-8  text-lg f font-semibold text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Mineral wool fibers consist of natural,<br /> chemically-inert fibers forming an open-cell structure that maintains its characteristics with time,<br /> implying easy handling and hassle-free storage.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
        </div>
    </div>
        </div>

         {/* <!-- Item 7 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={t6} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div class=" absolute py-8 px-4 mx-auto max-w-screen-xl  left-14 text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Stability</h1>
        <p class="mb-8  text-lg f font-semibold text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
The orientation of Rock wool fibers provides very good mechanical properties as well as excellent stability, no thermal expansion or contraction because of the open cell structure. Air pockets allow vapor to get through easily, while also having excellent thermal conductivity. The short fiber length of Rock wool also offers the possibility of making higher density products with a much higher capacity load than other materials.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
        </div>
    </div>

        </div>


    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
        
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


<section class="bg-white -translate-y-10 dark:bg-gray-900">
    <div class=" px-4 mt-5 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Insulation Types</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"> How to determine mineral wool insulation type?
Determination of mineral wool type Wheather Glass wool or Rock wool depends upon the following items:</p>
     
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-row-1 gap-3 justify-center items-center translate-x-0 ">
  <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1. Required application</h5>
  </a>
  <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2. Application shape (determine insulation type, boards or blankets)</h5>
  </a>
  <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">3. Thermal conductivity value (K value)</h5>
  </a>
  <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4. Fire hazard zones</h5>
  </a>
</div>



</section>

<div class="relative ml-16 translate-y-12">

  <a href="#" class=" flex flex-col items-center mt-10 ml-20 w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class=" w-52 rounded-lg h-52 " src={h1} alt=""/>
    <div class="flex flex-col rounded-lg justify-between p-4 leading-normal h-44">
        <h5 class="-translate-y-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Glass Wool Insulation</h5>
        <p class=" -translate-y-6 font-normal text-gray-700 dark:text-gray-400">Glass wool is made of sand, recycled glass, limestone and soda ash. These are the same ingredients that are used to make familiar glass objects such as window panes or glass bottles.</p>
        <a href="#" class="-translate-y-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>        
    </div>

</a>

<div id="accordion-collapse" data-accordion="collapse" class="mb-20 w-2/5 translate-x-96 left-96 ml-80 -translate-y-52 ">
        {accordionData1.map((item, index) => (
          <div key={index}>
            <h2
              id={`accordion-collapse-heading-${index}`}
              className="cursor-pointer"
              onClick={() => toggleAccordion1(index)}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                aria-expanded={
                  activeIndexAccordion1 === index ? "true" : "false"
                }
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{item.question}</span>
                <svg
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${
                activeIndexAccordion1 === index ? "block" : "hidden"
              } p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div id="accordion-collapse" data-accordion="collapse" class="mb-20 w-2/5 translate-x-96 left-96 ml-80 -translate-y-52 ">
        {accordionData2.map((item, index) => (
          <div key={index}>
            <h2
              id={`accordion-collapse-heading-${index}`}
              className="cursor-pointer"
              onClick={() => toggleAccordion2(index)}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                aria-expanded={
                  activeIndexAccordion2 === index ? "true" : "false"
                }
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{item.question}</span>
                <svg
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${
                activeIndexAccordion2 === index ? "block" : "hidden"
              } p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div> 

<a href="#" class="    absolute top-64 mt-4   ml-20 flex flex-col  items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class=" w-80 rounded-lg h-52 " src={h2} alt=""/>
    <div class="-translate-y-6 flex flex-col justify-between p-4 leading-normal h-44">
        <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rock Wool Insulation</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Rock wool is mainly made of volcanic rock, typically basalt and/or dolomite. An increasing proportion is composed of recycled materials made from slag, and a waste product made from blast furnaces.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</a>


</div>









<footer class="bg-white tanslate-y-24  rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a  class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={glassrock2} class="h-32" alt="GLASSROCK  Logo" />
               
            </a>
          
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a  class="hover:underline">GlassRock.™</a>. All Rights Reserved.</span>
    </div>
    
</footer>







 </body>



    );
}
export default Mineral; 