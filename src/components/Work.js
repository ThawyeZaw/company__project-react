import images from '../images/images'
import Typewriter from 'typewriter-effect'
import Slider from './Slider'

const Work = () => {
	return (
		<div className='work-bg-gradient relative w-full'>
			<div className='flex-column relative lg:flex'>
				<div className='h-[40vh] w-[100vw] overflow-hidden shadow-2xl lg:h-[60vh] lg:w-[50vw]'>
					<img src={images.photo2} alt='loading' className='h-full w-full object-cover lg:rounded-br-3xl' />
				</div>
				<div className='relative flex h-[40vh] w-[100vw] items-center justify-center lg:h-[60vh] lg:w-[50vw]'>
					<div className='absolute top-0 flex h-full w-full items-center justify-center'>
						<img src={images.bg1} alt=' ' className='h-3/4' />
					</div>
					<h1 className='text-stroke w-3/4 items-center whitespace-nowrap text-[6.5vw] font-extrabold text-gray-50 lg:text-[3.3vw]'>
						<Typewriter
							options={{
								strings: ['Experienced Engineers.', 'Stunning designs.', 'Best plans.'],
								autoStart: true,
								loop: true,
								delay: 200,
								deleteSpeed: 50
							}}
						/>
					</h1>
				</div>
			</div>
			<div className='relative mt-16 lg:mt-36'>
				<h1 className='text-stroke pt-4 text-center text-[5.6vw] font-extrabold text-gray-50 md:text-[3.6vw]'>Everything we can to deliver you the best homes.</h1>
				<div className='h-[calc(100vh-4rem)] z-10'>
					<h1 className='w-full text-center text-stroke text-gray-50 text-[5vw] h-[20%] font-extrabold'>Our Works</h1>
					<Slider />
				</div>
				<img src={images.photo2} alt='loading' className='absolute z-[-1] bottom-0 h-[calc(100vh-4rem)] w-full pt-2 object-cover opacity-60 mix-blend-screen' />
			</div>
		</div>
	)
}

export default Work