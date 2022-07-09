import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Work from './components/Work'
import { useEffect, useRef } from 'react'

function App() {
	useEffect(() => {
		window.addEventListener('scroll', changeNavStyleOnScroll)

		function changeNavStyleOnScroll() {
			const nav = document.querySelector('nav')

			if (window.scrollY > nav.offsetHeight) {
				nav.classList.add('bg-slate-200', 'bg-opacity-80')
			} else {
				nav.classList.remove('bg-slate-200', 'bg-opacity-80')
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
