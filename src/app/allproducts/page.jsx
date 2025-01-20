import React from 'react'
import Image from 'next/image'
import ProductList from '@/components/productList'

const AllProducts = () => {
  return (
    <div>
        <div className='px-5 py-14 xl:p-20 h-[60vh] xl:h-[100vh]'>
            <Image src={'/assets/images/AllProductsBanner.jpg'} alt='banner' height={1000} width={1000} quality={100} className='h-full w-full object-cover rounded-2xl'/>
        </div>
        <ProductList/>
    </div>
  )
}

export default AllProducts