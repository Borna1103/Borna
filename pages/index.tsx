import Head from 'next/head'
import Link from 'next/link'
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai'
import Icon from '/images/icon.png';
import Image from 'next/image'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>

      <main className='bg-gray-700 min-h-screen'>
        
        <section className='mb-8'>
          <nav className="flex flex-wrap justify-between bg-slate-600 px-10 w-full py-8 ">
              <ul className='flex flex-wrap items-center cursor-pointer'>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillCloud className='text-4xl text-teal-400 transition duration-200 ease-in-out hover:text-emerald-400 transform hover:scale-110'/></Link>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <Link href="/">Home</Link>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <Link href='skills'>Skills</Link>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <Link href="projects">Projects</Link>
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
        </section>

        <section>
          <div className='py-4 text-center font-bold text-teal-400 mb-10'>
            <h1 className='text-8xl'>Borna Hemmaty</h1>

            <h1 className='text-5xl py-6 font-light'>Computer Scientist - UnderGrad Student</h1>
          </div>
            
          <div className='fixed text-center'>
            <p className=' text-xl leading-8 font-medium text-white '>
               I am a student at the University of California San Diego learning to be a better developer as a Math 
               - Computer Science Major. Fun fact about me, I love getting the crispy chicken combo at Tapioca Express on campus.
            </p>
          </div>
        </section>

        <div className='flex flex-wrap justify-center'>
          <div className='fixed bottom-4'>
            <Image src={Icon} width={200} alt={'icon'}></Image>
          </div>
        </div>
        

        

       
        
      </main>
      
    </div>
  );
}
