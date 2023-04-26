import React from 'react'

export default function ProductCard({data}) {
  function formatHarga(harga)
  {
    return Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(harga).replace(',00', '')
  }

  return (
    <div className={'bg-white border border-slate-300 rounded-md shadow-md overflow-hidden'}>
        <img className='h-28 sm:h-44 w-full object-contain bg-slate-300' src={`assets/img/1.jpg`} alt={`img_product${data.id ? data.id : 'undefined'}`} />
        <div className='m-3 flex flex-col gap-2'>
            <p className='text-lg line-clamp-2 text-ellipsis'>{data.name ? data.name : 'undefined'}</p>
            <p className='font-black truncate'>{data.price ? formatHarga(data.price) : 'Rp 0'}</p>
            <p className='text-sm text-slate-600 font-semibold'><i className='text-red-600 fa-solid fa-location-dot'></i> {data.location ? data.location : 'undefined'}</p>
            <p className='text-sm text-slate-600'><i className='fa-solid fa-star text-yellow-300'></i> {data.rating ? data.rating : 0} | Terjual {data.sold ? data.sold : 0}</p>
        </div>
    </div>
  )
}
