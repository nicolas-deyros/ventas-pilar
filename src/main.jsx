import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'

const router = createBrowserRouter([
	{
		path: '*',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
])

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
)
