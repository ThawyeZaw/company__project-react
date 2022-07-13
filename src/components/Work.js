import React from 'react'
import images from '../images/images'

const Work = () => {
	return (
		<div className='work-bg-gradient relative w-full'>
			<div className='flex-column relative lg:flex'>
				<div className='h-[40vh] w-[100vw] overflow-hidden shadow-2xl lg:h-[60vh] lg:w-[50vw]'>
					<img src={images.photo2} alt='loading' className='h-full w-full object-cover lg:rounded-br-3xl' />
				</div>
				<div className='relative flex h-[40vh] w-[100vw] items-center justify-center lg:h-[60vh] lg:w-[50vw]'>
					<div className='absolute top-0 flex h-full w-full justify-center items-center'>
						<img src={images.bg1} alt=' ' className='h-3/4' />
					</div>
					<h1 className='text-stroke w-3/4 items-center text-[6.5vw] font-extrabold text-gray-50 lg:text-[3.3vw]'>Experienced Engineers</h1>
				</div>
			</div>
			<img src={images.photo2} alt='loading' className='mt-56 opacity-70 object-cover mix-blend-screen' />
		</div>
	)
}

export default Work
