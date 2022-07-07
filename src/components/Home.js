import React from 'react'
import images from '../images/images'

const Home = () => {
	return (
		<div className='h-screen w-full home'>
			<div className='relative'>
				<img className='h-screen w-full z-0 object-cover object-top mix-blend-overlay' src={images.photo1} alt='loading' />
			</div>
		</div>
	)
}

export default Home
