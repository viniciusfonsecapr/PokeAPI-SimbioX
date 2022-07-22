import React, { useEffect, useState } from 'react'
import { searchPokemon, getPokemonData, getPokemons, apiPokeapi} from '../../services/api'
import { FavoriteProvider } from "../../contexts/favoriteContext";
import { Container } from './styles'
import Header from '../../components/Header'
import Pokedex from '../../components/Pokedex';
import Searchbar from "../../components/Input";
import Navbar from '../../components/Navbar'


const favoritesKey = "f";

function Home() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
 
 
  const itensPerPage = 10;




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

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons()
  }, []);

  useEffect(() => {
    fetchPokemons()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }

    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };


  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon);
    if (!result) {
      setLoading(false)
      setNotFound(true);
    } else {
      setPokemons([result])
      setPage(0);
      setTotalPages(1)
    }
    setLoading(false)
  };

  return (
    <FavoriteProvider
    value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons,
    }}
  >
    <div>
      <Container>
        <Header></Header>
        <Navbar />
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
    </FavoriteProvider>
  );
}

export default Home;
