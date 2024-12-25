import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'
import ErrorPage from './components/error-page/ErrorPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />} >
      <Route path='/' element={<ProductList />} />
      <Route path='/productdetails/:id' element={<ProductDetails />} />
      <Route path='/shoppingcart' element={<ShoppingCart />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)


