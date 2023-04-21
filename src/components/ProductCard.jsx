import React from 'react'
import { Box, Image, Heading, Text, Button, Link } from '@chakra-ui/react'

const ProductCard = ({ product }) => {
	const { id, name, imageSrc, imageAlt, description, price } = product
	return (
		<Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Image src={imageSrc} alt={imageAlt} w={'100%'} />
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
				<Button mt='4' colorScheme='teal' variant='solid'>
					<Link href={`/product/${id}`} product={product}>
						Ver Producto
					</Link>
				</Button>
			</Box>
		</Box>
	)
}

export default ProductCard
