import React from 'react'

export default function Botao({onClick}) {
  return (
    <button className='bg-green-500 p-2 ' onClick={onClick}>Buscar</button>
  )
}
