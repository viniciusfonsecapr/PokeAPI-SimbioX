import React, { useEffect, useState } from 'react'
import { searchPokemon, getPokemonData, getPokemons } from '../../services/api'


import { Container } from './styles'
import Header from '../../components/Header'
import Pokedex from '../../components/Pokedex';
import Searchbar from "../../components/Input";

function Home() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
 
  const itensPerPage = 24;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);


  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <div>
      <Container>
        <Header></Header>
        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <h1>Não achamos esse Pokemon :\</h1>
        ) : (
            <Pokedex 
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}></Pokedex>
        )}
      </Container>
    </div>
  );
}

export default Home;
