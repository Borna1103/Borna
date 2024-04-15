import Head from 'next/head'
import Link from 'next/link'
import back from '/images/river.png'
import {Data} from '../Portfolio_Data/data'
import {cardFlip, projectdots} from '../Portfolio_Data/animations'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai';


/*
 * Start
*/

export default function Home() {
  let data = new Data();

  /*
  * Scrolling
  */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < prevScrollPos);
    if(currentScrollPos == 0){
      setVisible(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
  }, [prevScrollPos]);

  const scrollToTop = () => {
        scroll.scrollToTop({ smooth: true });
    };

  /*
  * Project
  */
  const numberOfProjects = data.projects.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToProject = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  
  const nextProject = () => {
    if (currentIndex < numberOfProjects - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const renderProjectDots = () => {
    return data.projects.map((project, index) => (
      <button
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => goToProject(index)}
      ></button>
    ));
  };


  /*
   * ! Page Start
  */
 
  return (
    <div>
     {/* 
       * Website Information
       */}
      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>
   
      {/* 
       * Main Page Content
       */} 

      <main>

          {/* 
            * Navigation Bar
            */} 
        <div>
          <nav className={`flex flex-wrap justify-between bg-slate-700 px-10 w-full py-8 `}>
              <ul className='flex flex-wrap items-center cursor-pointer'>
                <ScrollLink to='home' smooth={true} duration={500}><AiFillCloud className='text-4xl text-teal-400 transition duration-200 ease-in-out hover:text-emerald-400 transform hover:scale-110'/></ScrollLink>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'> 
                  <ScrollLink to='home' smooth={true} duration={500}>Home</ScrollLink>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <ScrollLink to='skills' smooth={true} duration={500}>Skills</ScrollLink>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <ScrollLink to='projects' smooth={true} duration={500}>Projects</ScrollLink>
                </li>
              </ul>
              <ul className="flex items-center">
                <li className='text-4xl flex gap-10 text-white ml-10 content-end'>
                  <Link href="https://github.com/Borna1103" target="_blank"><AiFillGithub  href="#" className="transition duration-200 ease-in-out text-white hover:text-black transform hover:scale-110"/></Link>
                  <Link href="https://www.linkedin.com/in/borna-hemmaty/" target="_blank"><AiFillLinkedin  href="google.com" className='transition duration-200 ease-in-out text-white hover:text-blue-500 transform hover:scale-110'/></Link>
                </li>
                <li>
                  <Link className=" transition duration-200 ease-in-out bg-gradient-to-r from-teal-600 to-emerald-400 text-white px-4 py-2 rounded ml-10 transform hover:scale-110 hover:text-gray-500" href='https://docs.google.com/document/d/1KWuzWsK7h3EPdu6ejwP-RgXp1NCmHELEJt0fr2j9-jc/edit?usp=sharing' target="_blank">
                    Resume
                  </Link>
                </li>
              </ul>
          </nav>
        </div>

        {/*
          * Page Introduction (Home page) 
          */}
       
        <div className='flex-grow dark:bg-gray-800' id='home'>
          {/* Content */}
          <div className='backdrop-blur-lg py-20 font-bold text-emerald-400 px-20 min-h-screen cursor-default' >
            <h1 className='text-6xl'>Borna Hemmaty,</h1>
            <h1 className='text-5xl py-6'>Im a Developer</h1>
          </div>
        </div>

        {/*
          * Skills Page
          */}
        <div className=' flex dark:bg-gray-800 h-screen' id='skills'>
          <div className='m-auto'>{cardFlip("", "PantryPal", 
          "Developed an online recipe book application with a team that takes in voice input to generate recipes to then store for later use",
          ["Multi Device Functionality"],
          ""
          )}</div>
          
          <div className='m-auto'>{cardFlip("", "Huffman Tree Encoding and Decoding", "", [], "")}</div>

          <div className='m-auto'>{cardFlip("", "Turing Machine", "", [],"")}</div>
        </div>

        {/*
         * Projects
                */}
        <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              My Technical Skills
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              What I know how to do!
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <span
                className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Alphabet Inc.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Official website
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>
              <a href="#" title=""
                className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button">
                View case study
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="space-y-4">
              <span
                className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Microsoft Corp.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Management system
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>
              <a href="#" title=""
                className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button">
                View case study
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="space-y-4">
              <span
                className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Adobe Inc.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Logo design
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>
              <a href="#" title=""
                className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button">
                View case study
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
        
        {/*
         * Back to top Button
                */}
        <button className={`fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </main>
      
    </div>
  );
}
