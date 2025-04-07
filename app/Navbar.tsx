"use client"
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const Navbar = () => {
    const links = [
        {label:"Dashboard", herf:'/dashboard'},
        {label:"Issues",herf:'/Issues'}
    ]
    const currentPath = usePathname();
    
  return (
    <nav className='flex space-x-6 border-b  p-4 px-6 h-14  items-center'>
        <Link href= "/"><FaBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <Link key={link.herf} 
              className={classnames({
                'text-zinc-900':link.herf === currentPath,
                'text-zinc-500':link.herf !== currentPath,
                'hover:text-zinc-800 transition-colors':true
              })}
 
 href={link.herf}>{link.label}</Link>)}
        </ul>

    </nav>
  )
}

export default Navbar