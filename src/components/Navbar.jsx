import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between text-white items-center p-3 bg-indigo-500'>
      <p className='text-2xl'>Super Stocks</p>

      <ul className='flex justify-between p-2 gap-3'>
        <Link to={'/'}><li className='p-2 cursor-pointer border-white border-2 rounded-md'>Home</li></Link>
        <Link to={'/stocks'}><li className='p-2 cursor-pointer border-white border-2 rounded-md'>All Stocks</li></Link>
        <Link to={'/portfolio'}><li className='p-2 cursor-pointer border-white border-2 rounded-md'>My Portfolio</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar