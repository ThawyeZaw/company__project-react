import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Work from './components/Work'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		window.addEventListener('scroll', changeNavStyleOnScroll)

		function changeNavStyleOnScroll() {
			const nav = document.querySelector('nav')

			if (window.scrollY > 10) {
				nav.classList.add('bg-slate-200', 'bg-opacity-90', 'text-gray-800', 'text-gray-700')
				nav.classList.remove('text-gray-100')
			} else {
				nav.classList.remove('bg-slate-200', 'bg-opacity-90', 'text-gray-800', 'text-gray-700')
				nav.classList.add('text-gray-100')
			}

		}
	}, [])
	
	return (
		<div className='App relative w-screen overflow-x-hidden'>
			<Nav />
			<Home />
			<Work />
		</div>
	)
}

export default App
