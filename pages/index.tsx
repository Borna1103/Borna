import Head from 'next/head'
import Link from 'next/link'
import back from '/images/river.png'
import {animations} from '/Website/Portfolio_Data/animations'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import {Data} from '/Website/Portfolio_Data/data'
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai';



export default function Home() {
  let data = new Data();

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToProject = (index) => {
    setCurrentIndex(index);
  };
  const nextProject = () => {
    if (currentIndex < numberOfProjects - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const numberOfProjects = data.projects.length;




  const [prevScrollPos, setPrevScrollPos] = useState(0);
        const [visible, setVisible] = useState(true);

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(currentScrollPos < prevScrollPos);
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
  
  
        const renderProject = () => {
          const project = data.projects[currentIndex];
          return (
            <div className="project px-20 py-10">
              <h3 className='font-bold text-teal-400 text-3xl py-3'>{project.Display_name}</h3>
              <p className='font-bold text-lg'>{project.Description}</p>
              {/* Add other project content here */}
            </div>
          );
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

      {/* Page Color */}
      <main>

          {/* 
            * Navigation Bar
            */} 
        <div>
          <nav className={`flex flex-wrap justify-between bg-slate-600 px-10 w-full py-8 transition-transform ${visible ? 'transform translate-y-0' : '-translate-y-full'}`}>
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
       
        <div className='flex-grow bg-cover bg-center bg-[url(../images/river.png)]' id='home'>
          {/* Content */}
          <div className='backdrop-blur-lg py-20 font-bold text-zinc-600 px-20 min-h-screen' >
            <h1 className='text-6xl'>Borna Hemmaty,</h1>
            <h1 className='text-5xl py-6'>Im a Developer</h1>
          </div>
        </div>

        {/*
          * Skills Page
          */}
        
        <div className='bg-slate-300 px-10 w-full py-8 min-h-screen' id='skills'>
          {/* Content */}
          <h1 className='font-bold text-teal-400 text-xl px-20'> Here are some things I know how to do</h1>
          <div className='w-1/2'>
          <h1 className='font-bold text-teal-400 text-xl px-20'> Languages:</h1>
            <ul className='px-20 py-4'>
              {data.Languages.map((language, index) => (
                <li key={index} className='text-gray-800 py-1'>
                  {language}
                </li>
              ))}
            </ul>
          </div>

          <div className='w-1/2'>
            <h1 className='font-bold text-teal-400 text-xl px-20'> Software:</h1>
            <ul className='px-20 py-4'>
                {data.Developer_Tools.map((Tools, index) => (
                  <li key={index} className='text-gray-800 py-1'>
                    {Tools}
                  </li>
                ))}
            </ul>
          </div>

          <div className='w-1/2'>
            <h1 className='font-bold text-teal-400 text-xl px-20'> Libraries:</h1>
            <ul className='px-20 py-4'>
                {data.Libraries.map((Lib, index) => (
                  <li key={index} className='text-gray-800 py-1'>
                    {Lib}
                  </li>
                ))}
            </ul>
          </div>

          <div className='w-1/2'>
            <h1 className='font-bold text-teal-400 text-xl px-20'> FrameWorks:</h1>
            <ul className='px-20 py-4'>
                {data.Frameworks.map((Fw, index) => (
                  <li key={index} className='text-gray-800 py-1'>
                    {Fw}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/*
         * Projects
                */}
      <div className='min-h-screen'>
        <section className="projects-container" style={{ transform: `translateX(-${currentIndex * 100}%) ` }}>
          {renderProject()}
        </section>
                
        
        <div className="project-dots">
          {renderProjectDots()}
        </div>
          
      </div>
        
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
