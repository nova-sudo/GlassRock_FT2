import React from "react";
import Navbar from "../Navbar";
import { FaRegBuilding } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineHvac } from "react-icons/md";
import { TbSubmarine } from "react-icons/tb";
import { FaLaptopHouse } from "react-icons/fa";
import { FaSunPlantWilt } from "react-icons/fa6";
import glassrock2 from "../assets/glassrock.jpg"
function Applications(){

return(
<body>
    <Navbar/>

    

<section class="bg-white -translate-y-20 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">


        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
           
            <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Our Applications</h1>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">GlassRock works with different infrastructures providing them with the best solutions for every problem, check out how and in what our product is applicable  </p>
           
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    
                    <FaRegBuilding/>
                </a>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Building And Construction</h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Wailing and Partitioning, Facade and external walls, Walls Penetrations and Irregular Shapes, Suspended Cielings, Roofing/ flooring, Domestic Hot/Cold pipes and acoustic fillings </p>
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>


            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" class="bg-purple-100 text-purple-800 text-s font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                <LiaIndustrySolid/>
                </a>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Industry</h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Boilers, Ovens and Furnaices, Fire Hazard Zones, Cryogenic and Cold Boxes, Tanks, Walls and Roofs, Industrila Noise, Chemineys and Towers, Out Range Piping Systems, Steel Structures and Hangers </p>
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" class="bg-purple-100 text-purple-800 text-s font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                <MdOutlineHvac/>
                </a>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">HVAC</h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Dust insulation, HVAC Acoustic</p>
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" class="bg-purple-100 text-purple-800 text-s font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                <TbSubmarine/> 
                </a>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Marine</h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Bulkheads, Deck and Partitions, Marine HVAC, Engine Room Area</p>
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" class="bg-purple-100 text-purple-800 text-s font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                <FaLaptopHouse/>
                </a>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">OEM</h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Household Appliances, Fire rating doors, Prefabricatied Houses and Caravans, Sandwiched Panels, Prefabricated Chemineys, Solar cells, Automotive Industry, AHU and Generators canopies</p>
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <a href="#" class="bg-purple-100 text-purple-800 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    <FaSunPlantWilt/>
                </a>
       
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Agriculture</h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Poultry Farms</p>
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>



        </div>
    </div>
</section>
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
export default Applications;