import React from 'react'
import PokeImage from '../../assets/pokeapimage.png'
import { Container, ContainerText } from './styles'

function Header() {

  return (
    <>
      <Container>
          <img src={PokeImage}></img>
        <ContainerText>
          <p>Home</p>
          <p>About</p>
          <p>API</p>
          <p>Github</p>
        </ContainerText>
      </Container>
       
       
    </>
  );
}

export default Header;
