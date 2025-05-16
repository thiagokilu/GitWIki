import React from 'react'

export default function Input({value, onChange}) {
  return (
      <input type="text" className='bg-amber-50 text-black p-2' placeholder='nome do repositório...'
      value={value} onChange={onChange}
      />
  )
}
