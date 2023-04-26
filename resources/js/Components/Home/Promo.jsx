import React from 'react'
import FeaturedTitle from '../saya/FeaturedTitle'
import Card from '../saya/Card'
import StandingBanner from '../saya/StandingBanner'

export default function Promo() {
  return (
    <div className='flex flex-col gap-7 sm:flex-row sm:items-center justify-center'>
                {/* produk harga terbaik */}
                <div className='flex-1'>
                  <FeaturedTitle text={'Produk harga terbaik'} /> 
                  <div className='grid grid-cols-2 grid-rows-2 gap-3'>
                    <Card child={
                        <a href="#">
                          <div className='bg-contain bg-no-repeat bg-center h-28 mb-3' style={{ backgroundImage: `url(assets/img/5.jpg)` }}></div>
                          <p className='font-bold text-center'>Xbox S series</p>
                          <p></p>
                        </a>
                    } />
                    <Card child={
                        <a href="#">
                          <div className='bg-contain bg-no-repeat bg-center h-28 mb-3' style={{ backgroundImage: `url(assets/img/7.jpeg)` }}></div>
                          <p className='font-bold text-center'></p>
                          <p></p>
                        </a>
                    } />
                    <Card child={
                        <a href="#">
                          <div className='bg-contain bg-no-repeat bg-center h-28 mb-3' style={{ backgroundImage: `url(assets/img/6.jpeg)` }}></div>
                          <p className='font-bold text-center'></p>
                    <p></p>
                        </a>
                    } />
                    <Card child={
                        <a href="#">
                          <div className='bg-contain bg-no-repeat bg-center h-28 mb-3' style={{ backgroundImage: `url(assets/img/17.jpg)` }}></div>
                          <p className='font-bold text-center'></p>
                          <p></p>
                        </a>
                    } />
                  </div>
                </div>

                {/* promo official store */}
                <div className='flex-1'>
                  <FeaturedTitle text={'Promo dari Official Store!'} />
                  <div className='flex gap-3 [&>*]:shrink-0 overflow-x-auto'>
                    <StandingBanner backgroundImage={'assets/img/4.jpg'} />
                    <StandingBanner backgroundImage={'assets/img/6.jpeg'} />
                    <StandingBanner backgroundImage={'assets/img/7.jpeg'} />
                    <StandingBanner backgroundImage={'assets/img/8.jpg'} />
                    <StandingBanner backgroundImage={'assets/img/9.jpeg'} />
                  </div>
                </div>
              </div>
  )
}
