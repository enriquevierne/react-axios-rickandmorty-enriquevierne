import { CharCard } from "../CharCard"
import { StyledListChar } from "./styles"

export const Characters = ({ characterList }) => {


    return (
        <StyledListChar>
            {characterList.length > 0 ? (
                
                characterList.map((character) => {
                    
                    return <CharCard key={character.id} character={character}/>
                    
                })

            ) : <h2>Nenhum personagem listado</h2>}
        </StyledListChar>

    )
}
