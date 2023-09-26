import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className=' w-full overflow-hidden'>
      <header className="container mx-auto p-4">
        <a href="/" className="flex items-center">
          <div>
            <img width={100} height={100} src={logo} alt="logo" />
          </div>
          <div>
            <h2><b>THE WIZARDS</b></h2>
          </div>
        </a>
      </header>
    </div>
  )
}

export default Header
