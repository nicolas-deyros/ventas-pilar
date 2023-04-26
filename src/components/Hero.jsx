import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const images = [
	'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
	'https://cdn.pixabay.com/photo/2023/03/29/08/19/tulips-7884877_960_720.jpg',
]

const Hero = () => {
	const [activeSlide, setActiveSlide] = useState(0)

	const handlePrev = () => {
		setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1)
	}

	const handleNext = () => {
		setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1)
	}

	return (
		<Box position='relative' my={3}>
			<Box
				display='flex'
				transform={`translateX(-${activeSlide * 100}%)`}
				transition='transform 0.5s ease-in-out'>
				{images.map((image, index) => (
					<Box
						key={index}
						flexShrink='0'
						width='100%'
						height={['250px', '400px']}
						background={`url(${image})`}
						backgroundSize='cover'
					/>
				))}
			</Box>
			<Box position='absolute' top='50%' left='2' transform='translateY(-50%)'>
				<motion.button
					onClick={handlePrev}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					p='2'
					bg='whiteAlpha.200'
					color='white'
					borderRadius='50%'
					mr='4'>
					&#8249;
				</motion.button>
				<motion.button
					onClick={handleNext}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					p='2'
					bg='whiteAlpha.200'
					color='white'
					borderRadius='50%'>
					&#8250;
				</motion.button>
			</Box>
		</Box>
	)
}

export default Hero
