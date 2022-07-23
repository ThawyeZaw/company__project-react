import { images } from '../images/images'
import { FiMenu } from 'react-icons/fi'

const Nav = () => {
	return (
		<nav className='op-0 fixed z-10 flex h-16 w-full cursor-pointer items-center justify-between text-gray-100 transition duration-500 lg:h-20 lg:justify-evenly'>
			<div className='ml-8 w-40 lg:ml-0'>
				<img src={images.logo} alt='DreamLand' />
			</div>
			<ul className='hidden gap-12 text-lg font-bold tracking-wider lg:flex xl:text-2xl'>
				<li><a href='#home'>Home</a></li>
				<li><a href='#work'>Work</a></li>
				<li><a href='#about'>About</a></li>
				<li><a href='#contact'>Contact</a></li>
				<li><a href='#login'>Log in</a></li>
			</ul>
			<button className='hidden h-12 w-32 rounded-full bg-yellow-700 text-xl font-bold tracking-wider text-gray-100 lg:block'>Sign up</button>
			<button className='mr-10 h-10 w-12 rounded-md bg-yellow-800 px-2 text-gray-100 lg:hidden'>
				<FiMenu className='h-full w-full' />
			</button>
		</nav>
	)
}

export default Nav
