import {useState, useEffect} from 'react';
const usePokemonFetch = (
    offset = 0,
    limit = 10
)=>{
    const [pokemonJsonObject, setPokemonJsonObject] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        if( !isMounted) {
            setIsMounted(true);
            return;
        }
        setIsloading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            .then(resp => resp.json())
            .then( data => {
                console.log("Returned: ", data);
                    setIsloading(false);
                    setHasError(false);
                    setError(null);
                    setPokemonJsonObject(data);
            })
            .catch(err=>{
                console.error(err);
                setIsloading(false);
                setHasError(true);
                setError(err);
            });
    }, [isMounted, setIsMounted, setIsloading, setHasError, setError, setPokemonJsonObject, offset, limit]);

    return {
        pokemonJsonObject,
        isLoading,
        hasError,
        error
    }
}



export default usePokemonFetch;