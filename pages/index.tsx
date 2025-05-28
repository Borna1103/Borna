import Head from 'next/head'
import React from 'react'
import logo from "public/Logo.png";
import Image from 'next/image';

// Components
import Projects from "../components/myProjects";
import Nav from "../components/myNav";
import Work from "../components/myWork";
import Classes from "../components/myClasses"
import About from "../components/myAbout"
import Footer from "../components/myFooter"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <link rel="icon" href="Logo.png" />
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>

      <main >

        <Nav />
       
        <section className='flex-grow bg-gray-900' id='home'>
          {/* Content */}
          <div className='md:py-20 py-10 font-bold text-teal-400 lg:px-48 px-10 md:min-h-screen h-auto cursor-default' >
            <div className='mx-auto grid max-w-xl grid-cols-1 lg:gap-y-20 gap-y-8 lg:max-w-none sm:grid-cols-2  animated fadeInDown'> 
              <ul>
                <h1 className='md:text-7xl xl:text-9xl text-4xl'>Borna</h1>
                <h1 className='md:text-7xl xl:text-9xl lg:py-6 py-2 text-4xl'>Hemmaty</h1>
                <h2 className='md:text-xl xl:text-2xl ml-2 mt-5 italic text-sm'> &quot;Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.&quot;</h2>
                <h2 className='md:text-xl xl:text-2xl ml-2 mt-5 italic text-sm'>-Thomas A. Edison</h2>
              </ul>
              <Image className=' w-52 md:w-80 xl:w-full sm:ml-10 md:ml-20 mx-auto ' draggable="false" src={logo} alt={''}></Image>
            </div>
          </div>
        </section>

        <section id='about'>
          <About/>
        </section>

        
      
        <section className='bg-gray-900 min-h-screen ' id='projects'>
          <div className='relative px-4 sm:px-8 lg:px-12 '></div>
            <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
              <hgroup className='animated fadeInDown space-y-10 lg:pl-16 xl:pl-48 '>
                
                  <header className='text-center py-10 font-bold text-teal-400 cursor-default lg:text-7xl text-5xl'>Projects</header>
                  <Projects />
              </hgroup>
              <div className='grid-rows-2'>
                <hgroup className='animated fadeInDown space-y-10  lg:pr-16 xl:pr-48 lg:pl-16 xl:pl-24'>
                  <header className='text-center py-10 font-bold text-teal-400 cursor-default lg:text-7xl text-5xl'>Experiences</header>
               
                  <Work />
                  <Classes />
                </hgroup>
              </div>
            </div>
        </section>
       
       

        <Footer/>

      </main>
      
    </div>
  );
}
