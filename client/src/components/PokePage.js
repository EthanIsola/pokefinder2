import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"

function PokePage({favs, user, setFavs}){
    const [displayCard, setCard] = useState(null)
    const [pokeName, setPokeName] = useState("")

    const search = "https://pokeapi.co/api/v2/pokemon/"

    //parses data from pokemon search fetch request
    function pokeSearch(pokename){
        fetch(`${search}${pokename.toLowerCase()}`)
        .then(r => r.json())
        .then(pokeData => {
            if(pokeData !== undefined){
                setCard(<PokeCard setFavs={setFavs} favs={favs} pok={pokeData} user={user}/>)
            }
        })
    }

    function handleChange(e){
        setPokeName(e.target.value)
    }

    return(
        <div>
            <div>
                <input placeholder="Pokemon Name" value={pokeName} onChange={handleChange}/>
            </div>
            <button onClick={()=>pokeSearch(pokeName)}>🔍</button>
            <br/>
            {displayCard}
        </div>
    )
}

export default PokePage;