import React from 'react'
import PokeImage from '../../assets/pokeapimage.png'
import { Container, ContainerText } from './styles'

function Header() {

  return (
    <>
      <Container>
          <img src={PokeImage}></img>
        <ContainerText>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='https://pokeapi.co/' target="_blank">POKEMON API</a>
          <a href='https://github.com/viniciusfonsecapr/PokeAPI-SimbioX' target="_blank">Github</a>
        </ContainerText>
      </Container>
       
       
    </>
  );
}

export default Header;
