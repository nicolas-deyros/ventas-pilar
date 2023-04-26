import React from 'react'
import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, Link } from '@chakra-ui/react'

const MAX_TITLE_LENGTH = 60

const ProductCard = ({ product }) => {
	const { id, title, category, image, description, price } = product
	return (
		<Center py={12}>
			<Box
				role={'group'}
				p={6}
				maxW={'330px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'2xl'}
				rounded={'lg'}
				pos={'relative'}
				zIndex={1}>
				<Box
					rounded={'lg'}
					mt={-12}
					pos={'relative'}
					height={'230px'}
					_after={{
						transition: 'all .3s ease',
						content: '""',
						w: 'full',
						h: 'full',
						pos: 'absolute',
						top: 5,
						left: 0,
						backgroundImage: `url(${image})`,
						filter: 'blur(15px)',
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: 'blur(20px)',
						},
					}}>
					<Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src={image} />
				</Box>
				<Stack pt={10} align={'center'}>
					<Text color={'gray.500'} fontSize={'sm'} textTransform={'capitalize'}>
						{category}
					</Text>
					<Heading
						fontSize={'2xl'}
						fontFamily={'body'}
						fontWeight={500}
						isTruncated={title.length > MAX_TITLE_LENGTH}>
						{title}
					</Heading>
					<Stack direction={'row'} align={'center'}>
						<Text fontWeight={800} fontSize={'xl'}>
							${price}
						</Text>
					</Stack>
				</Stack>
			</Box>
		</Center>
	)
}

export default ProductCard
