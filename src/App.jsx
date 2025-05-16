import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import ItemRepo from './components/ItemRepo/ItemRepo'
import Botao from './components/Botao/Botao'
import logo from './assets/logogithub.png'
import {api} from './services/api'

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, SetRepos] = useState([])

  const handleSearchRepo = async () => {


      const isExist = repos.find(repo => repo.full_name.toLowerCase() === currentRepo.toLowerCase())
      if(isExist){
        alert('Repositório já existe')
        return
      } 

      try {
        const {data} = await api.get(`repos/${currentRepo}`) 
        SetRepos(prev => [...prev, data])
        setCurrentRepo('')
      } catch (error) {
        console.log(error)
        alert('Repositório não encontrado')
      }
    

  }

  const handleRemoveRepo = (id) => {
    console.log(id)
    const removedRepo = repos.filter(repo => repo.id != id)
    SetRepos(removedRepo)
  }


  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col items-center justify-center mt-10 gap-10 w-full'>
      <img src={logo} alt="logo git" width={150}/>
      <h1 className='text-4xl'>Git Wiki</h1>
      <div className='flex flex-row gap-5 items-center'>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Botao onClick={handleSearchRepo}/>
      </div>
        <hr className="border-t-2 border-white my-4 w-[80%] mt-5" />
      </div>
      {repos.map(repo => <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}  
    </div>
  )
}

export default App
