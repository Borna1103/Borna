import React, { useState, useEffect} from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'


export function cardFlip(image: string, front: string, items : string[]) {
    /*
  * Skills Page Animations
  */
 

  return(
    <div className="flip-card">
            <div className='drop-shadow-xl card-front' >
            {/* Front content */}
                <h2>{image}</h2>
                <h2>{front}</h2>
            </div>
            <div className="card-back drop-shadow-sm" >
            {/* Back content */}
        {items}
              {/* Add your languages here */}
            </div>
    </div>
  )
}

export function projectdots() {

        
        
    }

export function scrollup(visible: boolean) {
    const scrollToTop = () => {
        scroll.scrollToTop({ smooth: true });
    };

    return(
    <button className={`fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    </button>
    )
}