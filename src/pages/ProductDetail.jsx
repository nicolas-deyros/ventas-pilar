import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Image, Heading, Text } from '@chakra-ui/react'
import products from '../data/products'

const ProductDetail = () => {
	const { id } = useParams()
	const selectedProduct = products.find((product) => product.id === parseInt(id))

	if (!selectedProduct) {
		return <div>Product not found</div>
	}

	const { name, imageSrc, imageAlt, description, price } = selectedProduct

	return (
		<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Image src={imageSrc} alt={imageAlt} />
			<Box p='6'>
				<Box d='flex' alignItems='baseline'>
					<Heading size='md' mr='2'>
						{name}
					</Heading>
					<Text fontSize='sm' color='gray.500'>
						${price}
					</Text>
				</Box>
				<Text mt='2' fontSize='sm' color='gray.500'>
					{description}
				</Text>
			</Box>
		</Box>
	)
}

export default ProductDetail
