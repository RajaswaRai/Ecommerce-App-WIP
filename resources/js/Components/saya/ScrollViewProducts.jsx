import React from 'react'
import ProductCard from './ProductCard'

export default function ScrollViewProducts({img, data}) {
  return (
    <div className='h-72 sm:h-96 relative overflow-x-auto'>
        <div id='scrollBg' className='sm:w-64 h-full sticky left-0 flex flex-col justify-center bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md sm:relative'>
            {img}
        </div>
       <div id='scroll_products' className='flex absolute gap-3 top-5 left-36 sm:left-48'>
            {
                data.map((product, index) => {
                    return(
                        <div className='shrink-0' key={index}>
                            <ProductCard data={product} />
                        </div>
                    )
                })
            }
       </div>
  
    </div>
  )
}
