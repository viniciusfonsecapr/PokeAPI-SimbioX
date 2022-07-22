import React from 'react'
import { Container } from './styles'
import Pagination from "../Pagination";
import Pokemon from "../Pokemon"

export default function Pokedex(props) {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <div className="header">
        <Pagination page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}></Pagination>
      </div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <div className="pokedex-grid">
          {pokemons && 
          pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon}></Pokemon>
          })}
        </div>
    )}
    </Container>

  )}
