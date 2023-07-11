import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AboutPage, CartPage, CheckoutPage, ErrorPage, HomePage, GlobaPageLayout, SingleProductPage} from './pages';
import Product from './components/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobaPageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "single-product/:id",
        element: <SingleProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "products",
        element: <Product />
      },
      {
        path: "checkout",
        element: <CheckoutPage />
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ]
  },
])

function App() {
  return (
  <RouterProvider router = {router} />
  )
}

export default App
