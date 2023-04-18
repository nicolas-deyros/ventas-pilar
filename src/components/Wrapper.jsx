import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import { Container } from '@chakra-ui/react'

const Wrapper = ({ children }) => {
	return (
		<>
			<Container
				maxW={{ base: '100%', sm: '720px', md: '960px', lg: '1200px', xl: '1440px' }}
				px={0}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</Container>
		</>
	)
}

export default Wrapper
