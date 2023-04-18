import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Image, Heading, Text } from '@chakra-ui/react'

const ProductDetail = ({ products }) => {
	const { id } = useParams()
	const product = products.find((product) => product.id === parseInt(id))

	return (
		<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Image src={product.imageSrc} alt={product.imageAlt} />
			<Box p='6'>
				<Box d='flex' alignItems='baseline'>
					<Heading size='md' mr='2'>
						{product.name}
					</Heading>
					<Text fontSize='sm' color='gray.500'>
						${product.price}
					</Text>
				</Box>
				<Text mt='2' fontSize='sm' color='gray.500'>
					{product.description}
				</Text>
			</Box>
		</Box>
	)
}

export default ProductDetail
