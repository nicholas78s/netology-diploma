import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog.html" element={<Catalog />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/contacts.html" element={<Contacts />} />
          <Route path="/products/:id.html" element={<Product />} />
          <Route path="/cart.html" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;

/*function withRouter(arg0: ({ location }: { location: any }) => import("react/jsx-runtime").JSX.Element) {
  throw new Error('Function not implemented.')
}*/

