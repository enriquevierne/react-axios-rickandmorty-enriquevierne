export const InfoChar = ({ character }) => {
    
    return (

       <div>
            <p>Created:{character.created}</p>
            <p>Gender:{character.gender}</p>
            <p>Location:{character.location.name}</p>
            <p>Species:{character.species}</p>
            <p>Type:{character.type}</p>
            <p>Status:{character.status}</p>
            <p>Episodes:{character.episode.length}</p>
            <p>Origin:{character.origin.name}</p>
        </div>

    )
}
