import { useRouteError } from 'react-router-dom'
import Wrapper from '../components/Wrapper'

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<Wrapper>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</Wrapper>
	)
}
