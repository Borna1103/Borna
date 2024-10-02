import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import{AiFillLinkedin, AiFillGithub, AiFillCloud} from 'react-icons/ai';

export default function Nav() {
    return (
        <nav className={`flex flex-wrap justify-between bg-slate-800 px-10 w-full py-8 `}>
              <ul className='flex flex-wrap items-center cursor-pointer'>
                <ScrollLink to='home' smooth={true} duration={500}><AiFillCloud className='text-4xl text-teal-400 transition duration-200 ease-in-out hover:text-emerald-400 transform hover:scale-110'/></ScrollLink>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'> 
                  <ScrollLink to='home' smooth={true} duration={500}>Home</ScrollLink>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <ScrollLink to='projects' smooth={true} duration={500}>Projects</ScrollLink>
                </li>
                <li className='ml-10 transition duration-200 ease-in-out text-white hover:text-emerald-400 transform hover:scale-110'>
                  <ScrollLink to='skills' smooth={true} duration={500}>Skills</ScrollLink>
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
    )}