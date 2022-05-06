import { useEffect } from "react";

function PokeCard({pok}){
    useEffect(()=>{console.log(pok);},[])
    return(
        <div className="pokeCard">
            <div id="firstContainer">
                <h1>{pok.name[0].toUpperCase()+pok.name.slice(1)}</h1>
                <img src={pok.sprites["front_default"]} alt="pokeimg"/>
            </div>
            <div id="secondContainer">
                <p>{pok.types.length!==2?"Type" : "Types" }: {pok.types[0].type["name"]}{pok.types.length!==2?null :`, ${pok.types[1].type["name"]}` }</p>
                <p>Height: {Number((pok.height/3.048).toFixed(2))} ft</p>
                <p>Weight: {Number((pok.weight/4.536).toFixed(2))} lbs</p>
            </div>
        </div>
    )
}

export default PokeCard;