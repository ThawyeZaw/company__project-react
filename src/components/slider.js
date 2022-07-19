import { slide_image } from '../images/images'

const Slide = props => {
	return (
		<div className={'flex-shrink-0 overflow-hidden rounded-lg shadow-lg shadow-slate-100 inline-block ' + props.width}>
			<img src={props.image} alt='Loading'  />
		</div>
	)
}

const Slider = () => {
	return (
		<div className='flex h-[75%] gap-8 justify-center items-center scrolling-wrapper'>
			<Slide image={slide_image.slideImage1} width={'w-[40vw]'} />
			<Slide image={slide_image.slideImage1} width={'w-[60vw]'} />
			<Slide image={slide_image.slideImage1} width={'w-[40vw]'} />
		</div>
	)
}

export default Slider
