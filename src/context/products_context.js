import axios from 'axios'
import React from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const openSideBar = () => {
    console.log("open sidebar clicked")
    dispatch({type: SIDEBAR_OPEN})
  }
  const closeSideBar = () => {
    dispatch({type: SIDEBAR_CLOSE})
  }

  const value = {
    ...state,
    openSideBar,
    closeSideBar
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return React.useContext(ProductsContext)
}
