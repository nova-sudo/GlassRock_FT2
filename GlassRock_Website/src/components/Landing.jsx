import React from 'react';
import './Navbar.css'; 
import { initFlowbite } from 'flowbite';
import { Link } from 'react-router-dom';

import glassrock2 from "../assets/glassrock.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpeg";

import Navbar from '../Navbar';

function Landing() {
    return (
        <body className="bg-grey-100 h-screen dark:bg-gray-900 dark:border-gray-700">
            <Navbar />
            <div id="default-carousel" className="relative px-4 md:px-20 -translate-y-10 md:-translate-y-28" data-carousel="slide">
                <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                    {/* Carousel items */}
                    {[s1, s2, s3, s4].map((src, index) => (
                        <div className="duration-700 ease-in-out" data-carousel-item key={index}>
                            <img src={src} className="absolute block w-full h-full object-cover" alt="Slide" />
                            <div className="absolute py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                                <h1 className="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-100 dark:text-white">
                                    {/* Add your titles here based on slide index */}
                                </h1>
                                <p className="mb-8 text-sm md:text-lg text-gray-100 dark:text-gray-400">
                                    {/* Add your descriptions here based on slide index */}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                    {Array(4).fill().map((_, index) => (
                        <button key={index} type="button" className="w-3 h-3 rounded-full" aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index}></button>
                    ))}
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                        <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
                        </svg>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                        <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
                        </svg>
                    </span>
                </button>
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="px-4 py-16 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Specialized in manufacturing both Glass wool and Rock wool
                    </h1>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>

            <div className="px-4 py-16 mx-auto max-w-screen-xl text-center dark:bg-gray-900">
                <h1 className="mb-4 text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                    Our Products
                </h1>
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
                    <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="w-full md:w-52 h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={h1} alt="Glass Wool Insulation" />
                        <div className="flex flex-col justify-between p-4">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Glass Wool Insulation</h5>
                            <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-400">Glass wool is made of sand, recycled glass, limestone and soda ash. These are the same ingredients that are used to make familiar glass objects such as window panes or glass bottles.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </a>
                    <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="w-full md:w-52 h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={h2} alt="Rock Wool Insulation" />
                        <div className="flex flex-col justify-between p-4">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rock Wool Insulation</h5>
                            <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-400">Rock wool is mainly made of volcanic rock, typically basalt and/or dolomite. An increasing proportion is composed of recycled materials made from slag, and a waste product made from blast furnaces.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </a>
                </div>
            </div>
        </body>
    );
}

export default Landing;
