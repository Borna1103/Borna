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
import Footer from "./myFooter"

export default function Home() {
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
 
  return (
    <div>
      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>

      <main >

        <Nav />
       
        <div className='flex-grow bg-gray-900' id='home'>
          {/* Content */}
          <div className='py-20 font-bold text-teal-400 px-48 min-h-screen cursor-default' >
            <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 justify-between animated fadeInDown'> 
              <div>
                <h1 className='lg:text-9xl sm:text-4xl'>Borna</h1>
                <h1 className='lg:text-9xl py-6 sm:text-4xl'>Hemmaty</h1>
                <h2 className='lg:text-2xl ml-2 mt-5 italic sm:text-sm'> &quot;Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.&quot;</h2>
                <h2 className='lg:text-2xl ml-2 mt-5 italic sm:text-sm'>-Thomas A. Edison</h2>
              </div>
              <Image className='content-end sm:ml-16 lg:ml-24' draggable="false" src={logo} alt={''}></Image>
            </div>
          </div>
        </div>


        <About/>

        <section className="h-52 bg-gradient-to-r bg-gray-900 py-12 px-4"></section>
      
        <div className='bg-gray-900 min-h-screen ' id='projects'>
          <div className='relative px-4 sm:px-8 lg:px-12 '></div>
            <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
              <div className='animated fadeInDown space-y-10 lg:pl-16 xl:pl-48 '>
                <div className='text-center py-10 font-bold text-teal-400 cursor-default' >
                    <h1 className='text-7xl'>Projects</h1>
                </div>
                  <Projects />
              </div>
              <div className='grid-rows-2'>
                <div className='animated fadeInDown space-y-10  lg:pr-16 xl:pr-48 lg:pl-16 xl:pl-24'>
                  <div className='text-center py-10 font-bold text-teal-400 cursor-default' >
                      <h1 className='text-7xl'>Experiences</h1>
                  </div>
                  <Work />
                  <Classes />
                </div>
              </div>
            </div>
        </div>
       
        <section className='h-52 bg-gradient-to-r bg-gray-900 py-12 px-4'></section>

        <Footer/>

        {/*
         * Back to top Button
                */}
        <button className={`fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
          <svg className='w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg'>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </main>
      
    </div>
  );
}
