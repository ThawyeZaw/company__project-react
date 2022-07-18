import images from '../images/images'
import { FiMenu } from 'react-icons/fi'

const Nav = () => {
	return (
		<nav className='fixed cursor-pointer text-gray-100 transition duration-500 op-0 z-10 flex h-16 w-full items-center justify-between lg:justify-evenly lg:h-20'>
			<div className='w-40 ml-8 lg:ml-0'>
				<img src={images.logo} alt='DreamLand' />
			</div>
			<ul className='hidden gap-12 text-lg font-bold tracking-wider lg:flex xl:text-2xl'>
				<li>Home</li>
				<li>About</li>
				<li>Designs</li>
				<li>Contact</li>
				<li>Log in</li>
			</ul>
			<button className='hidden h-12 w-32 rounded-full bg-yellow-700 text-xl font-bold tracking-wider text-gray-100 lg:block'>Sign up</button>
			<button className='w-12 h-10 mr-10 text-gray-100 px-2 rounded-md bg-yellow-800 lg:hidden'>
				<FiMenu className='w-full h-full' />
			</button>
		</nav>
	)
}

export default Nav
