import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './pages/Root.tsx'
import Home from './pages/Home.tsx'
import Sessions from './pages/Sessions.tsx'
import Session from './pages/Session.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        index: true,
        element: <Home />         
      },
      {
        path: 'sessions',
        element: <Sessions />
      },
      {
        path: 'sessions/:id',
        element: <Session />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />    
  )
}

export default App