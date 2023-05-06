import React, { useState, useEffect } from 'react'
import { Box, Grid, Button } from '@chakra-ui/react'
import ProductCard from './ProductCard'

const ProductGrid = () => {
	const [products, setProducts] = useState([])
	const [displayedProducts, setDisplayedProducts] = useState([])
	const [numProductsDisplayed, setNumProductsDisplayed] = useState(6)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data) => {
				setProducts(data)
				setDisplayedProducts(data.slice(0, numProductsDisplayed))
			})
	}, [])

	// Calculate number of rows needed based on number of products
	const numRows = Math.ceil(displayedProducts.length / 5)
	const rowTemplate = `repeat(${numRows}, 1fr)`

	const handleLoadMore = () => {
		setNumProductsDisplayed(numProductsDisplayed + 6)
		setDisplayedProducts(products.slice(0, numProductsDisplayed + 6))
	}

	return (
		<Box mx={{ base: 1, sm: 3, md: 3, lg: 3, xl: 0 }} my={3}>
			<Grid
				templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
				templateRows={rowTemplate}
				gap={4}>
				{displayedProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Grid>
			{numProductsDisplayed < products.length && (
				<Box mt={4} textAlign='center'>
					<Button onClick={handleLoadMore}>Load More Products</Button>
				</Box>
			)}
		</Box>
	)
}

export default ProductGrid
