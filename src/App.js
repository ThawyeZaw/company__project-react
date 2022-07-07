import './App.css'
import images from './images2/images'

function App() {
	return (
		<>
			<div className='App h-screen bg-slate-100'>
				<img src={images.photo1} className='sticky top-0 z-0 h-full w-full object-cover object-left lg:object-fill' alt='logo' />
			</div>
			<div className='z-10 h-screen bg-slate-600'></div>
		</>
	)
}

export default App
