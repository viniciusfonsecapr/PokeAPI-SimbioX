import React from 'react'
import { Container, ContainerItems, ContainerImage } from './styles'

function Card({ pokemon, loading, infoPokemon}) {
  return (
    <>
      {
        loading ? <h1>Loading.....</h1> :
          pokemon.map((item) => {
            return (
              <>
                <Container>
                  <ContainerItems key={item.id}>
                    <ContainerImage>
                      <img src={item.sprites.front_default}></img>
                    </ContainerImage>
                    <h2>#{item.id}</h2>
                    <h3>{item.name}</h3>
                    <h4>Peso: {item.weight} kg</h4>
                    <h4>Altura: {item.height} metros</h4>
                    <button onClick={()=> infoPokemon(item)}>Sobre</button>
                  </ContainerItems>
                </Container>
              </>
            )
          })
      }

    </>
  );
}

export default Card;
