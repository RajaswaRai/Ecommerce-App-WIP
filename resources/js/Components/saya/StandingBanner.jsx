import React from 'react'

export default function StandingBanner({child, backgroundImage}) {
  return (
    <div className='w-32 h-52 border border-slate-300 bg-white rounded-md bg-center bg-contain bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})` }}>
        {child}
    </div>
  )
}
