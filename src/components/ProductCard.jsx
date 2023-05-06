import { Link as RouteLink } from 'react-router-dom'
import {
	Flex,
	Circle,
	Box,
	Image,
	Badge,
	useColorModeValue,
	Icon,
	chakra,
	Tooltip,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

function ProductCard({ product }) {
	const {
		id,
		title,
		category,
		image,
		description,
		price,
		rating: { rate, count },
	} = product
	return (
		<RouteLink to={`/product/${id}`}>
			<Flex
				key={id}
				p={50}
				w='full'
				p={{ base: 4, md: 8 }}
				gap={4}
				alignItems='center'
				justifyContent='center'>
				<Box
					bg={useColorModeValue('white', 'gray.800')}
					maxW='sm'
					borderWidth='1px'
					rounded='lg'
					shadow='lg'
					position='relative'>
					<Circle size='10px' position='absolute' top={2} right={2} bg='red.200' />

					<Image src={image} alt={`Picture of ${title}`} roundedTop='lg' w='full' h='sm' />

					<Box p='6'>
						<Box d='flex' alignItems='baseline'>
							<Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
								{category}
							</Badge>
						</Box>
						<Flex mt='1' justifyContent='space-between' alignContent='center'>
							<Box fontSize='2xl' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
								{title}
							</Box>
							<Tooltip
								label='Add to cart'
								bg='white'
								placement={'top'}
								color={'gray.800'}
								fontSize={'1.2em'}>
								<chakra.a href={'#'} display={'flex'}>
									<Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
								</chakra.a>
							</Tooltip>
						</Flex>

						<Flex justifyContent='space-between' alignContent='center'>
							{
								<>
									<Box display='flex' alignItems='center' justifyContent='center'>
										{Array(5)
											.fill('')
											.map((_, i) => {
												const roundedRating = Math.round(rate * 2) / 2
												if (roundedRating - i >= 1) {
													return (
														<BsStarFill
															key={i}
															style={{ marginLeft: '1' }}
															color={i < rate ? 'teal.500' : 'gray.300'}
														/>
													)
												}
												if (roundedRating - i === 0.5) {
													return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
												}
												return <BsStar key={i} style={{ marginLeft: '1' }} />
											})}
										<Box as='span' ml='2' color='gray.600' fontSize='sm'>
											{count} review{count > 1 && 's'}
										</Box>
									</Box>
								</>
							}
							<Box fontSize='2xl' color={useColorModeValue('gray.800', 'white')}>
								<Box as='span' color={'gray.600'} fontSize='lg'>
									£
								</Box>
								{price.toFixed(2)}
							</Box>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</RouteLink>
	)
}

export default ProductCard
