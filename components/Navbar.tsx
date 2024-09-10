import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ui/ModeToggle/ModeToggle'


const Navbar = () => {
  return (
    <React.Fragment>
        <nav className='dark:text-white p-10 content-center z-50 relative flex flex-row justify-end items-center'>
            <ul className='flex gap-4 text-xl justify-end mr-20'>
                <li className="underline-hover dark:underline-hover-dark"><Link href="#about">About</Link></li>
                <li className="underline-hover dark:underline-hover-dark"><Link href="#experience">Experience</Link></li>
                <li className="underline-hover dark:underline-hover-dark"><Link href="#projects">Projects</Link></li>
                <li className="underline-hover dark:underline-hover-dark"><Link href="#bookshelf">Bookshelf</Link></li>
            </ul>
            <div className='absolute right-8'>
				<ModeToggle />
			</div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar