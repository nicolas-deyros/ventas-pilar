import React, { useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import {
	Box,
	Flex,
	Spacer,
	Image,
	Link,
	Text,
	Button,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import navLinks from '../data/navLinks'

const Navbar = () => {
	const { isOpen, onToggle } = useDisclosure()
	const NavLink = ({ text }) => <Link>{text}</Link>
	return (
		<Box bg='gray.50' boxShadow='sm' px={{ base: 3 }} position='relative' zIndex={1}>
			<Flex maxW='6xl' mx='auto' py={4} align='center' justify='space-between' wrap='wrap'>
				<Flex align='center'>
					{/* <Image src='/logo.png' alt='Logo' boxSize='50px' mr={4} /> */}
					<RouteLink to='/'>
						<Box fontSize='2xl' fontWeight='bold'>
							My Website
						</Box>
					</RouteLink>
				</Flex>
				<Spacer />
				<Box display={{ base: 'block', md: 'none' }}>
					<IconButton
						size='sm'
						aria-label='Menu'
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						onClick={onToggle}
						variant='outline'
					/>
				</Box>
				<Box display={{ base: 'none', md: 'block' }}>
					<Flex align='center' gap={3}>
						{navLinks.map((link) => (
							<RouteLink key={link.id} to={link.path}>
								{link.text}
							</RouteLink>
						))}
					</Flex>
				</Box>
			</Flex>
			{isOpen && (
				<Box
					py={4}
					borderBottom='1px'
					borderColor='gray.200'
					position='absolute'
					top='60px'
					left='0'
					w='full'
					bg='white'
					zIndex={2}
					textAlign='center'>
					<Flex direction='column' align='center'>
						{navLinks.map((link) => (
							<RouteLink key={link.id} to={link.path}>
								{link.text}
							</RouteLink>
						))}
					</Flex>
				</Box>
			)}
		</Box>
	)
}

export default Navbar
