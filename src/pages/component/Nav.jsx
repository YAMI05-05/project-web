import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <div className='mt-16 '>
      <Link to='' className='p-2 bg-green-500 text-white m-2 rounded-sm'>Home</Link>
      <Link to='/contact' className='p-2 bg-green-500 text-white m-2 rounded-sm'>contact</Link>
      <Link to='/about' className='p-2 bg-green-500 text-white m-2 rounded-sm'>about</Link>
      <Link to='/register' className='p-2 bg-green-500 text-white m-2 rounded-sm'>Register</Link>
      <Link to='/login' className='p-2 bg-green-500 text-white m-2 rounded-sm'>Login</Link>
      <Link to='/dashboard' className='p-2 bg-green-500 text-white m-2 rounded-sm'>Dashboard</Link>
      <Link to='/user-dashboard' className='p-2 bg-green-500 text-white m-2 rounded-sm'>User Dashboard</Link>


    </div>
  )
}

export default Nav
