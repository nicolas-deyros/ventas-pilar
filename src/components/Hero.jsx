import React, { useState, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { clampValue, createRange } from '@chakra-ui/utils'
import { Box } from '@chakra-ui/react'

const Dots = ({ count, active }) => (
	<Box className='dot-container'>
		{createRange(count).map((i) => (
			<motion.div
				className='dot'
				initial={false}
				animate={{
					scale: active === i ? 1.5 : 1,
					opacity: active === i ? 1 : 0.5,
				}}
				key={i}
			/>
		))}
	</Box>
)

const Slide = ({ color, ...rest }) => (
	<Box style={{ backgroundColor: color }} className='slide' {...rest} />
)

const Hero = () => {
	const constraintsRef = useRef(null)
	const [active, setActive] = useState(0)
	const x = useMotionValue(0)
	const drag = useMotionValue(0)

	const slides = ['blue', 'green', 'orange'].map((color) => <Slide key={color} color={color} />)

	const width = (constraintsRef.current && constraintsRef.current.offsetWidth) || 350

	const dragEndHandler = (event, info) => {
		const offset = info.offset.x
		if (Math.abs(offset) > 20) {
			const direction = offset < 0 ? 1 : -1
			setActive((active) => clampValue(active + direction, 0, slides.length - 1))
		}
	}

	return (
		<>
			<Box className='container' ref={constraintsRef}>
				<motion.div
					className='swipper'
					onDragEnd={dragEndHandler}
					dragConstraints={constraintsRef}
					drag='x'
					className='slider'
					animate={{
						x: -1 * active * width,
					}}>
					{slides}
				</motion.div>

				<Dots count={slides.length} active={active} />
			</Box>
			<Box style={{ height: 700 }} />
		</>
	)
}

export default Hero
