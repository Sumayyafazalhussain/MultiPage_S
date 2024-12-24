import React from 'react'
import Link from 'next/link'
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>LuxeCarry</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <FiShoppingCart  style={{color:"white",fontSize:"20px"}}/>
            
        </nav>
    </header>
  )
}

export default Header