import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { logo, background, write } from '../assets'
import { navLinks } from '../costants'

const Navbar = () => {
  const [active, setActive] = useState("")

  return (
    <nav
      className={`${styles.paddingX} w-full flex 
      py-5 fixed top-0 z-20
      bg-amber-400`}
    >
      <div
        className='flex justify-evenly  items-center w-full'
      >
        <Link
          to='/'
          className='flex relative'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo"
            className='w-30 h-20 object-contain' />
          <img src={write} alt="lambo-write"
            className='w-30 h-24 object-contain '
            style={{ position: 'absolute', left: '70px' }}
          />
        </Link>
        <ul
          className='list-none hidden
           sm:flex  gap-20 '
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className='text-black hover:text-white text-[18px] font-bold cursor-pointer'
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar