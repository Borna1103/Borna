import React, { useState, useEffect} from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

export class animations {
    /*
    * Animation for Projects
    */
    
    projects(){

        }

        
        
        /*
        * Animation for Scrolling
        */
    scroll() {
        const [prevScrollPos, setPrevScrollPos] = useState(0);
        const [visible, setVisible] = useState(true);

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(currentScrollPos < prevScrollPos);
            setPrevScrollPos(currentScrollPos);
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, [prevScrollPos]);

        const scrollToTop = () => {
            scroll.scrollToTop({ smooth: true });
        };
        }
    }