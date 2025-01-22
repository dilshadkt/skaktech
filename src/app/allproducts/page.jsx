'use client'
import React from 'react'
import Image from 'next/image'
import ProductList from '@/components/productList'
import ProductSlider from '@/components/ProductSlider'


const AllProducts = () => {
  return (
    <div>
            <div className='px-5 pt-14 xl:pt-20 xl:px-20  '>
             <ProductSlider/>
            </div>
            <ProductList/>
    </div>
  )
}

export default AllProducts