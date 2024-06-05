import Head from 'next/head'
import Link from 'next/link'
import {Data} from '../Portfolio_Data/data'
import {cardFlip, projectdots} from '../Portfolio_Data/animations'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import React, { useState, useEffect} from 'react'
import logo from "public/Logo.png"
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai';
import Image from 'next/image'


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
          <nav className={`flex flex-wrap justify-between bg-slate-800 px-10 w-full py-8 `}>
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
                  <Link href="https://github.com/Borna1103" target="_blank"><AiFillGithub  className="transition duration-200 ease-in-out text-white hover:text-black transform hover:scale-110"/></Link>
                  <Link href="https://www.linkedin.com/in/borna-hemmaty/" target="_blank"><AiFillLinkedin className='transition duration-200 ease-in-out text-white hover:text-blue-500 transform hover:scale-110'/></Link>
                </li>
                <li>
                  <Link className=" transition duration-200 ease-in-out bg-gradient-to-r from-teal-600 to-emerald-400 text-white px-4 py-2 rounded ml-10 transform hover:scale-110 hover:text-gray-500" href='https://drive.google.com/file/d/1arGy_pvBLR4m4TtuUIRyBAPaFWFlRV9q/view?usp=sharing' target='_blank'>
                    Resume
                  </Link>
                </li>
              </ul>
          </nav>
        </div>

        {/*
          * Page Introduction (Home page) 
          */}
       
        <div className='flex-grow dark:bg-gray-900' id='home'>
          {/* Content */}
          <div className='py-20 font-bold text-teal-400  px-20 min-h-screen cursor-default' >
            <div className='flex justify-between'> 
              <div>
                <h1 className='text-6xl'>Borna Hemmaty,</h1>
                <h1 className='text-5xl py-6'>Im a Developer</h1>
                <h2 className='ml-2 mt-5 italic'>Learning to be a better developer!</h2>
              </div>
              <Image className="content-end mr-40" draggable="false" src={logo} alt={''}></Image>
            </div>
           
            
          </div>
        </div>

        {/*
          * Empty Space 
          */}

      <div className='  dark:bg-gray-900 min-h-screen'></div>

        {/*
          * Projects 
          */}
        <div className=' flex dark:bg-gray-900 h-screen' id='skills'>
          <div className='m-auto'>{cardFlip("", "PantryPal App", 
          "Developed an online recipe book application with a team that takes in voice input to generate recipes to then store for later use",
          ["Multi Device Functionality through MongoDB", "Voice input to generate recipe based off of breakfast, lunch, or dinner and current ingredients", "Save and edit generated recipes", "Leverages DALL-E API to generate images of recipes to enhance user experience"],
          "Java, JavaFx, MongoDB, Whisper API, OpenAI API, DALL-E API",
          "https://github.com/ucsd-cse110-fa23/cse-110-project-team-31"
          )}</div>
          
          <div className='m-auto'>{cardFlip("", "Fortune Hut Web App", "Worked to improve an existing app by adding online funcitonality and a better developer experience with documentation, testing, and applying a refactor to split the backend and frontend of the code base with a MVC pattern",
          ["Adding MulktiDevice Functionality to save fortunes and login anywhere","Set Up Testing With Jest", "Use Github Actions to set up a CI/CD Pipeline to automate documentation, tests, and seting up the server", "Refactor Code Base to fit Model View Controller pattern"], 
          "Javascript, HTML, CSS, Node.js, MongoDB, Express, Jest", 
          "https://github.com/MichinoriW/cse112-group9"
          )}</div>

          <div className='m-auto'>{cardFlip("", "Huffman Tree Encoding and Decoding", "Exploring how to encrypt and decrypt data from Cse 100 at UCSD which focuses on Data Structures. Final Project in making a Huffman Tree to Encode a text file into binary and decode back into the original message.", [],"C++", "")}</div>
        </div>

        {/*
         * Skills
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

          <ul className="mt-10 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
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
