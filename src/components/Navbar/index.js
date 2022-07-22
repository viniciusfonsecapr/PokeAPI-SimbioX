import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import { Container } from "./styles";

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <Container>
      
      <div>❤️ / {favoritePokemons.length}</div>
    </Container>
  );
}