import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/react'

function Footer() {
	return (
		<Box as='footer' py='4'>
			<Flex justify='center' align='center'>
				<Text fontSize='sm'>© {new Date().getFullYear()} My Website. All rights reserved.</Text>
				<Box mx='2' />
				<Link href='/privacy' fontSize='sm'>
					Privacy Policy
				</Link>
				<Box mx='2' />
				<Link href='/terms' fontSize='sm'>
					Terms of Use
				</Link>
			</Flex>
		</Box>
	)
}

export default Footer
