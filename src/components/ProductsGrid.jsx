import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import ProductCard from './ProductCard'

const ProductGrid = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data) => setProducts(data))
	}, [])

	// Calculate number of rows needed based on number of products
	const numRows = Math.ceil(products.length / 5)
	const rowTemplate = `repeat(${numRows}, 1fr)`

	return (
		<Box mx={{ base: 1, sm: 3, md: 3, lg: 3, xl: 0 }} my={3}>
			<Grid
				templateColumns={[
					'repeat(2, 1fr)',
					'repeat(3, 1fr)',
					'repeat(3, 1fr)',
					'repeat(4, 1fr)',
					'repeat(5, 1fr)',
				]}
				templateRows={rowTemplate}
				gap={4}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Grid>
		</Box>
	)
}

export default ProductGrid
