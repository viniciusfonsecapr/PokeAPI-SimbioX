import React from 'react'
import PokeImage from '../../assets/pokeapimage.png'
import { Container, ContainerText } from './styles'

function Header() {

  return (
    <>
      <Container>
          <img src={PokeImage} alt="Pokeapi"></img>
        <ContainerText>
          <a href='/' rel="noreferrer">Home</a>
          <a href='/' rel="noreferrer">About</a>
          <a href='https://pokeapi.co/' target="_blank" rel="noreferrer">POKE API</a>
          <a href='https://github.com/viniciusfonsecapr/PokeAPI-SimbioX' target="_blank" rel="noreferrer">Github</a>
        </ContainerText>
      </Container>
       
       
    </>
  );
}

export default Header;
