import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'

function App({ children }) {
	return (
		<Wrapper>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/product/:id' element={<ProductDetail />} />
			</Routes>
			{children}
		</Wrapper>
	)
}

export default App
