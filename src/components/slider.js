import { slide_image } from '../images/images'

const Slide = props => {
	return (
		<div className={'inline-block flex-shrink-0 overflow-hidden rounded-lg object-cover shadow-lg shadow-slate-100 ' + props.size}>
			<img src={props.image} alt='Loading' className='h-full w-full object-cover object-center' />
		</div>
	)
}

const Slider = () => {
	return (
		<div className='scrolling-wrapper flex h-[75%] items-center justify-center gap-8'>
			<Slide image={slide_image.slideImage2} size={'w-[40vw] h-[40vh]'} />
			<Slide image={slide_image.slideImage1} size={'w-[60vw] h-[70vh]'} />
			<Slide image={slide_image.slideImage3} size={'w-[40vw] h-[40vh]'} />
		</div>
	)
}

export default Slider
