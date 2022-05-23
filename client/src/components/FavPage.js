import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
function FavPag({favs, user, setFavs}){
    const [data, setData] = useState([])
    const [cards, setCards] = useState(null)
    useEffect(()=>{
        for(let i in favs){
        fetch(`https://pokeapi.co/api/v2/pokemon/${favs[i].name.toLowerCase()}`)
        .then(r => r.json())
        .then(pokeData => {setData((data)=>[...data, <PokeCard setFavs={setFavs} favs={favs} pok={pokeData} user={user}/>])})}
    },[])

    return(
    <div className="favsHolder">
        {data}
    </div>
    )
}

export default FavPag;