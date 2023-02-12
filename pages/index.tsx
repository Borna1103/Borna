import Head from 'next/head'
import{AiFillLinkedin, AiFillGithub} from 'react-icons/ai'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>
    
      <main className="bg-gray-700">
        <section className="min-h-screen">
      
          <nav className="flex flex-wrap justify-between bg-slate-600 px-10 w-full py-10 mb-12 cursor-pointer">
            <ul className="flex items-center">
              
              <li className='transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                Home
              </li>
              <li className='ml-8 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110 '>
                About
              </li>
              <li className='ml-8 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                Skills
              </li>
              <li className='ml-8 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                Projects
              </li>
              <li>
                <a className=" transition duration-200 ease-in-out bg-gradient-to-r from-teal-600 to-emerald-400 text-white px-4 py-2 rounded ml-8 transform hover:scale-110 hover:text-gray-500"
                href='#'>
                  Resume
                </a>
              </li>

              <li className='text-4xl flex gap-10 text-white ml-8 content-end'>
                <AiFillGithub  href="#" className="transition duration-200 ease-in-out text-white hover:text-black transform hover:scale-110"/>
                <AiFillLinkedin  href="#" className='transition duration-200 ease-in-out text-white hover:text-blue-500 transform hover:scale-110'/>
              </li>
            </ul>
          </nav>

          <div className='p-10'>
            <h1 className='px-10 text-7xl font-medium font-bold text-teal-400'>Developed by</h1>
          
            <h1 className='px-10 text-8xl text-teal-400 font-medium font-bold  py-2'>Borna Hemmaty</h1>
          
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
