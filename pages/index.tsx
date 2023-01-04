import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Borna Hemmaty Portfolio</title>
        <meta name="description" content="Computer scientist Portfolio"/>
      </Head>
    
      <main>
        <section className="bg-teal-700 min-h-screen">
          <div>
            <h1 className=' text-3xl text-gray-700 font-bold animate-bounce text-center pt-10  '>Developer</h1>
          </div>

          <div>
            <h1 className=' text-3xl text-gray-700 font-bold animate-bounce text-center'>Borna Hemmaty</h1>
          </div>
            
          <div>
            <h2 className=' align-text-top text-xl font-semibold pr-96 pl-10'>
                I am a student at the University of California San Diego learning to be a  better developer as a Math 
              - Computer Science Major. Fun fact about me, I love getting the crispy chicken combo at Tapioca Express on campus.
            </h2>
          </div>
        </section>
      </main>
        
    </div>
  );
}
