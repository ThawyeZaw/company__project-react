import React from 'react'
import images from '../images/images'

const Home = () => {
	return (
		<div className='home relative flex h-screen w-full items-center justify-center'>
			<img className='absolute z-0 h-screen w-full object-cover object-top mix-blend-color' src={images.photo1} alt='loading' />
			<h1 className='absolute flex flex-col items-center font-sans text-7xl font-extrabold text-gray-50'>
				<p className='text-stroke text-center lg:text-8xl'>
					Let's build
					<br className='md:hidden' />
					&nbsp;the future
					<br /> together!
					<br />
				</p>
				<div className='relative mt-20 h-16 w-80 text-lg text-slate-700 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] sm:w-96 sm:text-xl lg:h-20 lg:w-[30rem] lg:rounded-full lg:text-2xl'>
					<input type={'text'} className='h-full w-full rounded-2xl py-2 px-2 sm:px-8 lg:rounded-full ' placeholder='Find prices and designs' />
					<button className='absolute top-0 right-0 h-full rounded-r-2xl bg-yellow-700 px-4 text-2xl font-bold tracking-widest text-gray-100 sm:px-6 lg:rounded-r-full lg:px-8 lg:text-3xl'>Find</button>
				</div>
			</h1>
		</div>
	)
}

export default Home
