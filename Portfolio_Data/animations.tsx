import React, { useState, useEffect} from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'


export function cardFlip(image: string, front: string, about : string, features : string[], skills : string) {
    /*
  * Skills Page Animations
  */
 
  return(
    <div className="flip-card">
            <div className='drop-shadow-xl card-front'>
            {/* Front content */}
                <h2>{image}</h2>
                <h2 className='font-bold text-slate-700 text-5xl text-center'>{front}</h2>
            </div>
            <div className="card-back drop-shadow-xl " >
            {/* Back content */}
              <div className='font-bold fixed left-0 top-0 mt-5 ml-5 mr-5'>
                <h2>{about}</h2>
                <ol className="list-disc ml-5 mt-5">
                  {for (i in features){

                  }}
                  <li>test</li>
                </ol>
              </div>
              {/* Add your languages here */}
            </div>
    </div>
  )
}

export function projectdots() {

        
        
    }

