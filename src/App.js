import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Work from './components/Work'

function App() {
		return (
		<div className='App relative w-screen overflow-x-hidden scroll-smooth'>
			<Nav />
			<Home />
			<Work />
		</div>
	)
}

export default App
