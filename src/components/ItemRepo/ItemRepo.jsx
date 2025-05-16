import React from 'react'

export default function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <div className='flex flex-col'>
        <h3 className='text-2xl'>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.url} className='text-green-400' target="_blank">Ver repositório</a>
        <a href="#" className='text-red-400' onClick={handleRemove}>Remover repositório</a>
        <hr className="border-t-2 border-white my-4 w-[80%] mt-5" />
    </div>
  )
}