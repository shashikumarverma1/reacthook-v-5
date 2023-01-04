import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{marginTop:20}}>
        <div style={{marginTop:20}} >
            <Link  to='/' className='text-blue-800 bg-green-300 p-2 rounded m-2'>useref</Link>
            <Link  to='/usereducer' className='text-blue-800 bg-green-300 p-2 m-2 rounded'>usereducer</Link>
            <Link to ='usecallback'  className='text-blue-800 bg-green-300 p-2 m-2 rounded'>usecallback</Link>
            <Link to ='usememo'  className='text-blue-800 bg-green-300 p-2 rounded m-2'>usememo</Link>
            <Link to ='uselayouteffect'  className='text-blue-800 bg-green-300 p-2 m-2 rounded'>uselayouteffect</Link>
        </div>
    </div>
  )
}

export default Navbar