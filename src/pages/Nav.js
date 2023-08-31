import React,{ useState } from 'react'

const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <div className="nav w-full min-w-screen">
      <div className="bg-blue-900 border-b-2 border-white">
        <div className="container mx-auto py-4">
          <nav className='items-center px-4'>
            {/* Top Nav */}
            <div>
              <ul className='hidden md:flex text-xl p-2'>
                <li>
                  <a href="/" className="hover:text-[#8e91ac] px-3 py-2">Welcome</a>
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
    </div>
  )
}

export default Nav
