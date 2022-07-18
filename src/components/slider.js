import { images, slide_image } from '../images/images'

const Slide = props => {
	return (
		<div className='w-[60vw] overflow-hidden rounded-lg shadow-lg shadow-slate-100'>
			<img src={props.image} alt='Loading' />
		</div>
	)
}

const Slider = () => {
	return (
		<div className='flex h-[75%] min-w-full items-center justify-center overflow-x-scroll'>
			<Slide image={slide_image.slideImage1} />
			<Slide image={slide_image.slideImage1} />
			<Slide image={slide_image.slideImage1} />
		</div>
	)
}

export default Slider
