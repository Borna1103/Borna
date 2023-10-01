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

