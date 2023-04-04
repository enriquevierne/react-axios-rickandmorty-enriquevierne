import { useEffect, useState } from 'react'
import { Characters } from './Components/Characters'
import { CharCard } from './Components/CharCard'
import { api } from './services/api'


function App() {

  const [characterList, setCharacterList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {

    const request = async () => {

      try {
        const response = await api.get(`character?page=${page}`)
        setCharacterList(response.data.results)
        console.log(response)
      } catch (error) {
        console.log(error)

      }
    }
    request()
  }, [page])

  const nextPage = () => {
    
    if(page > 0)
    setPage(page + 1)
    console.log(page)
  }
  
  const previousPage = () => {
    
    if(page > 1)
    setPage(page - 1)
    console.log(page)
  }


  return (
    <div className="App">
      <div>
        <button onClick={nextPage}>Next Page</button>
        <button onClick={previousPage}>Previous Page</button>
      </div>
      <Characters characterList={characterList} />
    </div>
  )
}

export default App
