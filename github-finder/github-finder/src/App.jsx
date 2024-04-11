import './App.css'
import { useEffect, useState } from 'react'
import { useGitHubFinder } from './hooks/useGitHubFinder.jsx'
import { useFindRepositories } from './hooks/useFindRepositories.jsx'

// Components
import CardGitHubUser from './components/CardGitHubUser.jsx'
import CardRepositoriesUser from './components/CardRepositoriesUser.jsx'
import CardLoading from './components/CardLoading.jsx'


function App() {

  const [setup, setSetup] = useState("G4rutti")
  const [username, setUsername] = useState("G4rutti")
  const { dados, loading, error } = useGitHubFinder(setup)
  const { dados: data, loading: carregamento, error: erro } = useFindRepositories(setup)




  const handleSubmit = (e) => {
    e.preventDefault()
    setSetup(username)
  }

  const handleBack = (e) => {
    e.preventDefault()
    setSetup("G4rutti")
  }

  return (
    <div className='flex w-full flex-col '>
      <div className='flex w-full justify-center mt-10 mb-10'>
        <label className="input input-bordered mr-4 h-10 my-auto">
          <input className='w-36 text-center h-10'
            name='search-by-username'
            type='text'
            placeholder='Search by username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <div>
          <button className='btn btn-primary'
            onClick={handleSubmit}>Procurar</button>
        </div>
      </div>
      {!error ? (
        (loading ? (
          <CardLoading />
        ) : (
          <div>
            <CardGitHubUser
              avatar={dados?.avatar_url}
              nome={dados?.name}
              login={dados?.login}
              seguidores={dados?.followers}
              seguindo={dados?.following}
              biografia={dados?.bio}
              repos={dados?.public_repos}
            />
            <h2 className='text-gray-300 font-black text-xl uppercase w-full text-center my-4'>Repositórios do usuário</h2>
            {carregamento ? (
              <div className='flex m-auto justify-center items-center'>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            ) : (
              data && Array.isArray(data) && data.map((item) => (
                <CardRepositoriesUser key={item.id} nome={item.name} linguagem={item.language} link={item.html_url} />
              ))
            )}
          </div>
        ))
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='mb-10 text-xl uppercase font-bold text-gray-300 w-36 text-center'>Usuário não encontrado.</h1>
          <button className="btn btn-error" onClick={handleBack}>Voltar para o início</button>
        </div>
      )}


    </div>
  )
}

export default App

