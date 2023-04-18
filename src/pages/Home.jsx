import React from 'react'
import Hero from '../components/Hero'
import ProductsGrid from '../components/ProductsGrid'

const HomePage = () => {
	return (
		<>
			<section>
				<Hero />
			</section>
			<section>
				<ProductsGrid />
			</section>
		</>
	)
}

export default HomePage
