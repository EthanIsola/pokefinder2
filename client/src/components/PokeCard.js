import { useEffect, useState } from "react";

function PokeCard({pok, favs, user, setFavs}){

    const [star, setStar] = useState(null)

    //sets the star based on inclusion in the favorites list
    useEffect(()=>{
        checkIncluded(pok.name)?setStar(`⭐`):setStar(`✰`)
    },[pok])

    

    //used to check if the pokemon is currently listed in favorites
    function checkIncluded(pokemon){
        if(favs!==null){
            for(let i=0;i<favs.length;i++){
                if(favs[i].name===pokemon){
                    return true
                }
            }
            return false
        }
    }

    //finds the index of the pokemon in favs
    function findName(){
        let myIndex = favs.map(e=>{return e.name}).indexOf(pok.name)
        return myIndex
    }

    function createFavs(){
        if (star==='⭐'){
            delFav(pok.name)
        }
        else{
            addFav(pok.name)
        }
    }

    function addFav(){
        let formData={
            name: pok.name,
            user_id: user
        }
        fetch("/favorite", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then(setStar(`⭐`))
        setFavs((favs)=>[...favs, {name: pok.name}])
    }

    function delFav(){
        let formData={
            name: pok.name,
            user_id: user
        }
        fetch("/favs", {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
      })
      .then(r=>r.json())
      .then(setStar('✰'))
      let myFavs = favs.filter((pokemon)=>{
          return pokemon.name!==pok.name})
      setFavs(myFavs)
    }

    return(
        <div className="pokeCard">
            <div id="firstContainer">
                <p className="starButton" onClick={createFavs}>{star}</p>
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