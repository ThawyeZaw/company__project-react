import React from 'react'
import images from '../images/images'

const Nav = () => {
	return (
		<nav className='fixed top-0 z-10 flex h-16 w-full items-center justify-around'>
			<div className='w-40'>
				<img src={images.logo_edited} alt='DreamLand' />
			</div>
			<ul className='hidden gap-12 text-lg font-bold tracking-wider text-gray-100 lg:flex'>
				<li>Home</li>
				<li>About</li>
				<li>Designs</li>
				<li>Contact</li>
				<li>Log in</li>
			</ul>
			<button className='hidden h-12 w-32 rounded-full bg-yellow-800 text-xl font-bold tracking-wider text-gray-100 lg:block'>Sign up</button>
		</nav>
	)
}

export default Nav
