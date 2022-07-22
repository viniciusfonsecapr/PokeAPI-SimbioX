import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import { Container } from "./styles";

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <Container>
      
      <div> <img src="https://cdn-icons-png.flaticon.com/512/188/188918.png" width={15} height={15} alt="pokebola"></img>  / {favoritePokemons.length}</div>
    </Container>
  );
}