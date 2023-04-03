import { useState } from "react"
import { InfoChar } from "../InfoChar"

export const CharCard = ({ character }) => {
    
    const [openInfo, setOpenInfo] =useState(false)
    
    const toggle = () => {
        
        if(!openInfo){

            return setOpenInfo(true)
        }else{

            return setOpenInfo(false)
        }
    }
        
    return (
        <li>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <button onClick={toggle}>Abrir e fechar</button>
            {openInfo ? <InfoChar character={character}/> : <h2>Detalhes</h2>}
        </li>
    )



}