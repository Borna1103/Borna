import Head from 'next/head'
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai'


export default function Home() {
  return (
    <div>

      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>

      <main className="bg-gray-700">
        <section className="min-h-screen">
        <nav className="flex flex-wrap justify-between bg-slate-600 px-10 w-full py-8 mb-12 cursor-pointer">
              <ul className='flex flex-wrap items-center'>
                <AiFillCloud href='/' className='text-4xl text-teal-400 transition duration-200 ease-in-out hover:text-emerald-400 transform hover:scale-110'/>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <a href="/">Home</a>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110 '>
                  <a href="about">About</a>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <a href='skills'>Skills</a>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <a href="projects">Projects</a>
                </li>
              </ul>
              <ul className="flex items-center">
                <li className='text-4xl flex gap-10 text-white ml-10 content-end'>
                  <a href="https://github.com/Borna1103" target="_blank"><AiFillGithub  href="#" className="transition duration-200 ease-in-out text-white hover:text-black transform hover:scale-110"/></a>
                  <a href="https://www.linkedin.com/in/borna-hemmaty/" target="_blank"><AiFillLinkedin  href="google.com" className='transition duration-200 ease-in-out text-white hover:text-blue-500 transform hover:scale-110'/></a>
                </li>
                <li>
                  <a className=" transition duration-200 ease-in-out bg-gradient-to-r from-teal-600 to-emerald-400 text-white px-4 py-2 rounded ml-10 transform hover:scale-110 hover:text-gray-500" href='https://docs.google.com/document/d/1KWuzWsK7h3EPdu6ejwP-RgXp1NCmHELEJt0fr2j9-jc/edit?usp=sharing' target="_blank">
                    Resume
                  </a>
                </li>
              </ul>
          </nav>


          <div className='p-10'>
            <p className='px-10 text-xl leading-8 py-5 font-medium text-white text-opacity-80'>
                I am a student at the University of California San Diego learning to be a better developer as a Math 
              - Computer Science Major. Fun fact about me, I love getting the crispy chicken combo at Tapioca Express on campus.
            </p>
          </div>
        </section>
      </main>
      
    </div>
  );
}
