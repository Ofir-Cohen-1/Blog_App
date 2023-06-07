import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/ofirBlog.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=tech'>
            {' '}
            <h6>Tech</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            {' '}
            <h6>Design</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            {' '}
            <h6>Food</h6>
          </Link>
          <span>Ofir</span>
          <span>Logout</span>
          <span className='write'>
            {' '}
            <Link className='link' to='/write'>
              Write
            </Link>{' '}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
