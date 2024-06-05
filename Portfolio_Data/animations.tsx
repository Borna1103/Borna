import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";


/*
 * Project Cards
 */
export function cardFlip(image: string, front: string, about : string, features : string[], skills : string, link: string) {
  let has_Link = true
  if(link == ""){
    has_Link = false
  }
  return(
    <div className="flip-card">


            <div className='drop-shadow-xl card-front'>
            {/* Front content */}
                
                <h2 className='font-bold text-teal-400 text-5xl text-center'>{front}</h2>
            </div>


            {/* Back content */}
            <div className="text-teal-400 card-back drop-shadow-xl " >
              <div className='font-bold fixed left-0 top-0 mt-5 ml-5 mr-5'>

                {/* Skill Display */}
                <h2 className='italic text-sm'>{skills}</h2>

                {/* About */}
                <h2 className='mt-5'>{about}</h2>
                
                {/* Feature List */}
                <div className='mt-5'>
                  <h2 className='text-lg'>Features:</h2>
                  <ol className="list-disc ml-5">
                    <li>{features[0]}</li>
                    <li>{features[1]}</li>
                    <li>{features[2]}</li>
                    <li>{features[3]}</li>
                  </ol>
                </div>
              </div>

              <Link href={link} className='mt-96 transition duration-200 ease-in-out bg-gradient-to-r from-teal-600 to-emerald-400 text-white px-4 py-2 rounded transform hover:scale-110 hover:text-gray-500' target='_blank'>Github Link!</Link>
            
            </div>
    </div>
  )
}

export function projectdots() {

        
        
    }

