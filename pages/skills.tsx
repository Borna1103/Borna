import Head from 'next/head'
import Link from 'next/link'
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai'


export default function Home() {
  return (
    <div>

      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>

      <main className="bg-gray-700">

        <section className='min-h-screen'>
        <nav className="flex flex-wrap justify-between bg-slate-600 px-10 w-full py-8 cursor-pointer">
              <ul className='flex flex-wrap items-center'>
                <Link href="/"><AiFillCloud className='text-4xl text-teal-400 transition duration-200 ease-in-out hover:text-emerald-400 transform hover:scale-110'/></Link>
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

        

        <section className='absolute top-20'>
          <div className='p-10'>
            
            <div className='flex flex-wrap items-center px-10 py-5 text-4xl text-teal-400 font-semibold'>
              <h1>
                Programming Languages 
              </h1>
              <h1 className='ml-32'>
                Software
              </h1>
              <h1 className='ml-32'>
                OS
              </h1>
            </div>


            <h1 className='px-10 py-2 text-xl text-teal-400 font-semibold'>
              Java
            </h1>
            <h1 className='px-10 py-2 text-xl text-teal-400 font-semibold'>
              C
            </h1>
            <h1 className='px-10 py-2 text-xl text-teal-400 font-semibold'>
              C++
            </h1>
            <h1 className='px-10 py-2 text-xl text-teal-400 font-semibold'>
              Python
            </h1>
            <h1 className='px-10 py-2 text-xl text-teal-400 font-semibold'>
              Assembly
            </h1>
            <h1 className='px-10 py-2 text-xl text-teal-400 font-semibold'>
              LaTeX
            </h1>
          </div>
        </section>

      </main>
      
    </div>
  );
}
