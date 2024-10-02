import Head from 'next/head'
import {animateScroll as scroll } from 'react-scroll'
import React, { useState, useEffect} from 'react'
import logo from "public/Logo.png";
import Image from 'next/image';
import Projects from "./myProjects";
import Nav from "./myNav";
import Work from "./myWork";
import Classes from "./myClasses"
import About from "./myAbout"

/*
 * Start
*/

export default function Home() {

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

      <main >

        <Nav />

        {/*
          * Page Introduction (Home page) 
          */}
       
        <div className='flex-grow bg-gray-900' id='home'>
          {/* Content */}
          <div className='py-20 font-bold text-teal-400 px-48 min-h-screen cursor-default' >
            <div className='flex justify-between'> 
              <div>
                <h1 className='text-9xl'>Borna</h1>
                <h1 className='text-9xl py-6'>Hemmaty</h1>
                <h2 className='text-2xl ml-2 mt-5 italic'>Learning to be a better developer!</h2>
              </div>
              <Image className="content-end" draggable="false" src={logo} alt={''}></Image>
            </div>
          </div>
        </div>


        <About/>
        {/*
          * Projects 
          */}
        <div className='bg-gray-900 min-h-screen' id='projects'>
          
          
          <div className='relative px-4 sm:px-8 lg:px-12 '></div>
            
            <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
              <div className='space-y-10 lg:pl-16 xl:pl-48 '>
                <div className='text-center py-10 font-bold text-teal-400 cursor-default' >
                    <h1 className='text-7xl'>Projects</h1>
                </div>
                  <Projects />
              
              </div>
              <div className='grid grid-rows-2'>
                <div className=' space-y-10 gap-y-10 lg:pr-16 xl:pr-48 lg:pl-16 xl:pl-24'>
                  <div className='text-center py-10 font-bold text-teal-400 cursor-default' >
                      <h1 className='text-7xl'>Experiences</h1>
                  </div>
                  <Work />
                  <Classes />
                </div>
              </div>
            </div>
        </div>
       
        {/*
         * Skills
                */}
        <section className=" bg-gray-900 antialiased" id="skills">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-white">
              My Technical Skills
            </h2>
            <p className="mt-4 text-base font-normal sm:text-xl text-gray-400">
              What I know how to do!
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center text-white">
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6 ">Java</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6">C++</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6 ">C#</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6">C</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6">Python</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6">Javascript</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6">R</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6">LaTeX</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6 ">HTML</a>
          </li>
          <li>
              <a className="me-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-default hover:text-indigo-500 md:me-6 ">CSS</a>
          </li>
      </ul>
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
