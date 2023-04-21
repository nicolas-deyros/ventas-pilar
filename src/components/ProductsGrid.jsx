import React from 'react'
import { Box, Grid, SimpleGrid } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import products from '../data/products'

const ProductGrid = () => {
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
				templateRows={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']}
				gap={4}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Grid>
		</Box>
	)
}

export default ProductGrid
