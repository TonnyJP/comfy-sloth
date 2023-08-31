import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products: products, grid_view} = useFilterContext();
  if(products.length <1){
    return <h5 style={{textTransform: 'none'}}> Sorry no product match your search...</h5>
  }
  return (
    <div>
      {grid_view ? 
       <GridView products = {products}> product list</GridView>
       : 
       <ListView products={products}></ListView>
       }
    </div>
  )
}

export default ProductList
