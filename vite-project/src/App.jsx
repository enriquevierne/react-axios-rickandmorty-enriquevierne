import { useEffect, useState } from 'react'
import { Characters } from './Components/Characters'
import { CharCard } from './Components/CharCard'
import { api } from './services/api'


function App() {

  const [characterList, setCharacterList] = useState([])

  useEffect(() => {

    const request = async () => {

      try {
        const response = await api.get('character');
        setCharacterList(response.data.results)

      } catch (error){
        console.log(error)

      }
    }
    request()
  }, [])

  
  return (
    <div className="App">
      <Characters characterList={characterList}/>
    </div>
  )
}

export default App
