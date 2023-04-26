import React from 'react'

export default function Card({child}) {
    console.log(child);
  return (
    <div className='bg-white border border-slate-300 rounded-md overflow-hidden'>
        {child}
    </div>
  )
}
