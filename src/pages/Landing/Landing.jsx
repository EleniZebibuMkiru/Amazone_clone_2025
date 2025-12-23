import React from 'react'
import LayOut from '../../components/Layout/LayOut'
import Carousel from '../../components/Carousel/CarouselEffect'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
function Landing() {
  return (
    <LayOut>
        <div>
      <Carousel />
      <Category />   {/* Category section */}
      <Product />    
    </div>
    </LayOut>
  )
}

export default Landing
