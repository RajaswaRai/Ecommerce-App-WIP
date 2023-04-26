import React from 'react'
import TextInput from '../TextInput'
import LineVertical from './LineVertical'

export default function Navbar() {
  return (
    <div className='bg-white p-3 flex gap-3 justify-between items-center sticky top-0 w-full shadow z-50'>
        <p className='hidden sm:inline-block text-2xl font-black text-blue-950'>TokoApp</p>
        
        <div className='flex-1 gap-5 flex relative'>
            <TextInput placeholder='Cari di Toko App' className='w-full px-12'  />
            <i className='text-slate-400 fa-solid fa-magnifying-glass absolute top-1/3 left-5'></i>
            <button className='hover:bg-slate-200 rounded-md h-10 w-10 transition-all'><i className='fa-solid fa-cart-shopping text-slate-600'></i></button>
            <LineVertical className='hidden sm:block' />
        </div>

        <div className='hidden sm:flex gap-3'>
            <button className='hover:scale-110 transition-transform border border-blue-950 text-base p-1 w-20 rounded-md'>Masuk</button>
            <button className='hover:scale-110 transition-transform bg-blue-950 text-white p-1 w-20 rounded-md'>Daftar</button>
        </div>
    </div>
  )
}
