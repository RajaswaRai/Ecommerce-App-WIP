import Promo from '@/Components/Home/promo'
import Card from '@/Components/saya/Card'
import FeaturedTitle from '@/Components/saya/FeaturedTitle'
import Navbar from '@/Components/saya/Navbar'
import ProductCard from '@/Components/saya/ProductCard'
import ScrollViewProducts from '@/Components/saya/ScrollViewProducts'
import StandingBanner from '@/Components/saya/StandingBanner'
import { Head } from '@inertiajs/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home(props) {
  console.log(props);

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    return axios.get(`api/get/products`)
    .then(res => {
      console.log('res products: ', res);
      setProducts(res.data.data)
    })
    .catch(err => console.log('err: ', err))
  }

  let [products, setProducts] = useState([])

  return (
    <>
        <Head title='Beranda' />
        <div className='min-h-screen bg-gray-200'>
          <Navbar />
          <div className='p-3'>
            <div className='max-w-screen-xl m-auto min-h-screen flex flex-col gap-7'>
              <FeaturedTitle text={'Featured Products'} />
              <div className='flex gap-3 flex-wrap justify-between items-center'>
                  <img className='sm:w-[49%] w-full' src="assets/img/banner.jpg" alt="banner_left" />
                  <img className='sm:w-[49%] w-full' src="assets/img/banner2.jpg" alt="banner_right" />
              </div>

              <div className=' bg-white rounded-md p-2'>
                <div className='overflow-x-auto flex justify-between gap-3 [&>*]:shrink-0 [&>button]:border [&>button]:border-slate-300 [&>button]:p-2 [&>button]:rounded-md hover:[&>button]:bg-slate-100 [&>button]:transition-colors pb-2'>
                  <button><i className='fa-solid fa-table-list'></i> Kategori</button>
                  <button><i className='fa-solid fa-mobile-screen-button'></i> Handphone & Tablet</button>
                  <button><i className='fa-solid fa-receipt'></i> Top-Up & Tagihan</button>
                  <button><i className='fa-solid fa-mountain-city'></i> Travel & Entertainment</button>
                  <button><i className='fa-solid fa-shield-cat'></i> Perawatan Hewan</button>
                  <button><i className='fa-solid fa-money-bill-wave'></i> Keuangan</button>
                  <button><i className='fa-solid fa-computer'></i> Komputer & Laptop</button>
                </div>
              </div>

              {/* promo */}
              {
                products.length ?
                <div>
                  <ScrollViewProducts 
                    img={
                    <>
                      <img className='rounded-full h-24 w-24 sm:h-36 sm:w-36 mx-2 bg-white object-cover' src={"assets/img/cod.jpg"} alt={"cod_img"}/>
                      <p className='sm:text-center w-32 sm:w-40 font-bold sm:text-xl mx-2 text-slate-700'>PROMO Ongkir Gratis Pakai COD</p>
                    </>
                  } 
                    data={products}
                  />
                </div>
                :
                ''
              }

              {
                products.length ? 
                <Promo />
                :
                ''
              }

              {/* fetch all products */}
              <div>
                <FeaturedTitle text={'Untuk anda'} />
                {
                  products.length ? 
                  <div className='grid grid-flow-row sm:grid-cols-6 grid-cols-2 gap-3'>
                    {
                      products.map((product, index) => {
                        return (
                          <ProductCard key={index} data={product} />
                          )
                        })
                      } 
                  </div>  
                  :
                  <p className='font-bold text-3xl text-slate-400 text-center my-10'>- Produk Kosong -</p>
                }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
