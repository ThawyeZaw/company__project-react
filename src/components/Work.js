import React from 'react'
import images from '../images/images'

const Work = () => {
	return (
		<div className='work-bg-gradient relative h-[180vh] w-full'>
			<div className='flex-column relative md:flex'>
				<div className='h-[40vh] md:h-[60vh] w-[100vw] overflow-hidden md:w-[50vw]'>
					<img src={images.photo2} alt='loading' className='h-full w-full object-cover' />
				</div>
				<div className='flex w-[100vw] items-center md:w-[50vw]'>
					<h1 className='pl-10 text-7xl md:text-3xl lg:text-5xl text-stroke font-bold text-gray-50'>Best Plans</h1>
				</div>
			</div>
			<div className=''></div>
		</div>
	)
}

export default Work
