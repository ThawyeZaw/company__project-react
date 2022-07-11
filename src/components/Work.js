import React from 'react'
import images from '../images/images'

const Work = () => {
	return (
		<div className='work-bg-gradient relative h-[160vh] w-full'>
			<div className='flex-column relative md:flex'>
				<div className='h-[40vh] w-[100vw] overflow-hidden md:h-[60vh] md:w-[50vw]'>
					<img src={images.photo2} alt='loading' className='h-full w-full object-cover md:rounded-br-3xl' />
				</div>
				<div className='relative flex w-[100vw] justify-center items-center md:w-[50vw]'>
					<div className='absolute top-0 flex h-full w-full items-center justify-center'>
						<img src={images.bg1} alt=' ' className='m-10 h-3/4' />
					</div>
					<h1 className='text-stroke w-3/4 items-center text-[6.5vw] font-extrabold text-gray-50 md:text-[3.3vw]'>Experienced Engineers</h1>
				</div>
			</div>
			<div className=''>
				<h1>Everything we can to deliver you the best homes.</h1>
				<img src={images.photo2} alt="loading" className=' bg-blend-normal object-cover' />
			</div>
		</div>
	)
}

export default Work
