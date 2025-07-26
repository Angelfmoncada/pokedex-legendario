import {useState, useEffect} from 'react';
import { useParams } from "react-router";
const Pokemon = ()=>{
    const { pokemonId } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState();
    useEffect(
        ()=>{
            setIsLoading(true);
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(resp=>resp.json())
            .then(data=>{
                setPokemonData(data);
                setIsLoading(false)
                setHasError(undefined);
            }).catch((err)=>{
                setHasError("An Error Ocurred while loading Pokemon")
                setIsLoading(false);
                setPokemonData(null);
            });
        }
    , [pokemonId, setPokemonData, setIsLoading, setHasError]);
    return (
        <>
            { isLoading && (<div> Loading ...</div>)}
            {pokemonData && (
                <>
                <h1>Detalle del Pokemon {pokemonData.name}</h1>
                <hr/>
                <div>
                    <img src={pokemonData.sprites.front_default} />
                    <img src={pokemonData.sprites.back_default} />
                </div>
                {/*<pre>
                    {JSON.stringify(pokemonData, null, 2)}
                </pre>*/}
                </>
            )}
            { hasError && (
                <div>An Error occured while loading Pokemon</div>
            )}

        </>
    )
}

export default Pokemon;