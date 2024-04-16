import React, { useState, useEffect} from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import donut from '/images/river.png'



export function cardFlip(image: string, front: string, about : string, features : string[], skills : string) {
    /*
  * Skills Page Animations
  */
 
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


                <div className='flex'>
                  <h1>test</h1>
                  <h1>test2</h1>

                </div>
              </div>
            </div>
    </div>
  )
}

export function projectdots() {

        
        
    }

