import Head from 'next/head'
import Image from 'next/image'
import donut from '/images/donut.png'
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
              <a href="/"><AiFillCloud className='text-4xl text-teal-400 transition duration-200 ease-in-out hover:text-emerald-400 transform hover:scale-110'/></a>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <a href="/">Home</a>
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
          <div>
            <Image src={donut} width={300} className='bg-blue-400 rounded-3xl border bg-opacity-50' alt={'donut'}></Image>
          </div>
        </section>
      </main>
      
    </div>
  );
}
