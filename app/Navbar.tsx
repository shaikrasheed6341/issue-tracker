import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";

const Navbar = () => {
    const links = [
        {label:"Dashboard", herf:'/dashboard'},
        {label:"issues",herf:'/issue'}
    ]
  return (
    <nav className='flex space-x-6 border-b  p-4 px-6 h-14  items-center'>
        <Link href= "/"><FaBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <Link key={link.herf} className='text-zinc-400 hover:text-zinc-900 transition-colors' href={link.herf}>{link.label}</Link>)}
        </ul>

    </nav>
  )
}

export default Navbar