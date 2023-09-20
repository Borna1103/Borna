import Head from 'next/head'
import Link from 'next/link'
import back from '/images/river.png'
import {Data} from '/Borna/Portfolio_Data/data'
import {animations} from '/Borna/Portfolio_Data/animations'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai';



export default function Home() {
  let data = new Data();
  const [isFlipped, setIsFlipped] = useState(false);

  const numberOfProjects = data.projects.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToProject = (index) => {
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
        
        <div className="flip-card">
          <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card-front">
              {/* Front content */}
              <h2>Skills</h2>
              <button onClick={() => setIsFlipped(true)}>Flip</button>
            </div>
            <div className="card-back">
              {/* Back content */}
              <h2>Languages</h2>
              {/* Add your languages here */}
              <button onClick={() => setIsFlipped(false)}>Flip Back</button>
            </div>
          </div>
        </div>

        {/*
         * Projects
                */}
      <div className='min-h-screen' id='projects'>
        <div className='flex justify-between'>
        <div className='hover:cursor-pointer' onClick={prevProject}>left</div>
        <section className="projects-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

          <div className="project px-20 py-10">
            <h3 className='font-bold text-teal-400 text-3xl'>{data.projects[0].Display_name}</h3>
            <p className='font-bold text-teal-400 text-md'>Skills: {data.projects[0].Skills}</p>
            <p className='font-bold text-lg py-3'>{data.projects[0].Description}</p>
              {/* Add other project content here */}
          </div>
          <div className="project px-20 py-10">
            <h3 className='font-bold text-teal-400 text-3xl'>{data.projects[1].Display_name}</h3>
            <p className='font-bold text-teal-400 text-md'>Skills: {data.projects[1].Skills}</p>
            <p className='font-bold text-lg py-3'>{data.projects[1].Description}</p>
            {/* Add other project content here */}
          </div>

          <div className="project px-20 py-10">
            <h3 className='font-bold text-teal-400 text-3xl'>{data.projects[2].Display_name}</h3>
            <p className='font-bold text-teal-400 text-md'>Skills: {data.projects[2].Skills}</p>
            <p className='font-bold text-lg py-3'>{data.projects[2].Description}</p>
            {/* Add other project content here */}
          </div>

          <div className="project px-20 py-10">
            <h3 className='font-bold text-teal-400 text-3xl'>{data.projects[3].Display_name}</h3>
            <p className='font-bold text-teal-400 text-md'>Skills: {data.projects[3].Skills}</p>
            <p className='font-bold text-lg py-3'>{data.projects[3].Description}</p>
            {/* Add other project content here */}
          </div>

          <div className="project px-20 py-10">
            <h3 className='font-bold text-teal-400 text-3xl'>{data.projects[4].Display_name}</h3>
            <p className='font-bold text-teal-400 text-md'>Skills: {data.projects[4].Skills}</p>
            <p className='font-bold text-lg py-3'>{data.projects[4].Description}</p>
            {/* Add other project content here */}
          </div>
        </section>
        <div className='hover:cursor-pointer' onClick={nextProject}>right</div>
          </div>
        <div className="project-dots origin-bottom">
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
