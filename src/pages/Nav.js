import React,{ useState } from 'react'
import {  useLocation } from 'react-router-dom';
import { cn } from '../components/lib/utils';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import Header from './Header'


const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    console.log(latestScrollY);
    // pravious
    const pravious = scrollY.getPrevious();

    console.log("previous", pravious);
    console.log("latest", latestScrollY);

    if (latestScrollY > pravious && latestScrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const location = useLocation();
  console.log("location",location.pathname);

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <motion.div  variants={{
      hidden: { opacity: 0, y: -100 ,display:"none"},
      visible: { opacity: 1, y:0 },
    }}
    animate={isHidden ? "hidden" : "visible"}
    transition={{ duration: 0.35, ease: "easeInOut" }} className="nav w-full min-w-screen fixed  top-0 z-[1000]">
       <Header />
      <div className="bg-blue-900 border-b-2 border-white">
        <div className="container mx-auto py-4">
          <nav className='items-center px-4'>
            {/* Top Nav */}
            <div>
              <ul className='hidden md:flex text-xl p-2'>
                <li>
                  <a href="/" className={cn("hover:text-[#8e91ac] px-3 py-1 rounded-md",location.pathname ==='/'? "bg-black":"")}>Welcome</a>
                </li>
                <li>
                  <a href="/madesimple"  className={cn("hover:text-[#8e91ac] px-3 py-1 rounded-md",location.pathname ==='/madesimple'? "bg-black":"")}>Made Simple</a>
                </li>
                <li>
                  <a href="/investment" className={cn("hover:text-[#8e91ac] px-3 py-1 rounded-md",location.pathname ==='/investment'? "bg-black":"")}>Investment</a>
                </li>
                <li>
                  <a href="/stats" className={cn("hover:text-[#8e91ac] px-3 py-1 rounded-md",location.pathname ==='/stats'? "bg-black":"")}>Stats</a>
                </li>
                <li>
                  <a href="/account" className={cn("hover:text-[#8e91ac] px-3 py-1 rounded-md",location.pathname ==='/account'? "bg-black":"")}>Account</a>
                </li>
              </ul>
            </div>

            
            {/* Responsive Nav */}
            {!navIsShown ? (
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
              
            ) : (          
              <svg
                xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7 z-50' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
            )}
            {navIsShown && (
              <div className='md:hidden absolute z-10 top-40 left-0  w-full text-black'>
                <ul className='text-center mb-2 bg-white p-2 mx-4'>
                  <li>
                    <a href="/" className="hover:text-[#8e91ac] px-3 py-2 ">Home</a>
                  </li>
                  <li>
                    <a href="/madesimple" className="hover:text-[#8e91ac] px-3 py-2">Made Simple</a>
                  </li>
                  <li>
                    <a href="/investment" className="hover:text-[#8e91ac] px-3 py-2">Investment</a>
                  </li>
                  <li>
                    <a href="/stats" className="hover:text-[#8e91ac] px-3 py-2">Stats</a>
                  </li>
                  <li>
                    <a href="/account" className="hover:text-[#8e91ac] px-3 py-2">Account</a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </motion.div>
  )
}

export default Nav
