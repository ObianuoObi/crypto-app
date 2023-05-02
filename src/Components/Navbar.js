import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
  return (
    <div className='header'>
    <div className='container'>
<h1>Cry<span className='primary'>Pto</span></h1>
<ul className='nav-menu'>
<li>
    <a href='/'>Home</a>
</li>
<li>
    <a href='/'>Featured</a>
</li>
<li>
    <a href='/'>Earn</a>
</li>
<li>
    <a href='/'>Contact</a>
</li>
</ul>
<div className='btn-group'>
    <button className='btn'> Connect Wallet</button>
</div>
<div className='hamburger'>
<FaBars/>
</div>
    </div>
    </div>
  )
}

export default Navbar