import * as React from 'react'
import { Box, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react'
import { motion, useTransform, useScroll } from 'framer-motion'

const images = [
	'https://via.placeholder.com/768x487',
	'https://via.placeholder.com/768x487',
	'https://via.placeholder.com/768x487',
]

const Hero = () => {
	const { scrollYProgress } = useScroll()
	const [currentSlide, setCurrentSlide] = React.useState(0)

	const imageIndex = React.useMemo(() => {
		return Math.floor(currentSlide) % images.length
	}, [currentSlide])

	const x = useTransform(scrollYProgress, [0, 1], [0, -100])
	const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

	const handlePreviousSlide = () => {
		setCurrentSlide(currentSlide - 1)
	}

	const handleNextSlide = () => {
		setCurrentSlide(currentSlide + 1)
	}

	return (
		<Box position='relative' height='100vh' overflow='hidden'>
			<motion.div
				style={{ x, opacity }}
				position='absolute'
				top={0}
				left={0}
				right={0}
				bottom={0}
				backgroundImage={`url(${images[imageIndex]})`}
				backgroundSize='cover'
			/>

			<Box
				position='absolute'
				top={0}
				left={0}
				right={0}
				bottom={0}
				bgGradient='linear(to-t, rgba(0,0,0,0.7), transparent)'
			/>

			<Box position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)'>
				<VStack spacing={8} alignItems='center'>
					<Heading
						color='white'
						fontSize={{ base: '4xl', md: '6xl' }}
						fontWeight='bold'
						textAlign='center'>
						Welcome to our store!
					</Heading>
					<Text color='white' fontSize={{ base: 'xl', md: '2xl' }} textAlign='center'>
						Shop our latest collection of products.
					</Text>

					<HStack spacing={8}>
						<Button variant='outline' colorScheme='whiteAlpha' onClick={handlePreviousSlide}>
							Previous
						</Button>
						<Button variant='outline' colorScheme='whiteAlpha' onClick={handleNextSlide}>
							Next
						</Button>
					</HStack>
				</VStack>
			</Box>
		</Box>
	)
}

export default Hero
