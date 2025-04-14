import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Men from './components/Men/Men'
import Owmen from './components/Owmen/Women'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import { ProductProvider } from './components/Context/ProductProvider'
import Women from './components/Owmen/Women'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/men',
          element: <Men />,
        },
        {
          path: '/women',
          element: <Women />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/product/:id',
          element: <ProductDetails />,
        }
      ]
    }
  ])

  return (
    <>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  )
}

export default App;
