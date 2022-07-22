import React, {useContext} from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import { Container } from "./styles";


export default function Pokemon(props) {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
      };


      const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
    return (
        <Container>
            <div className="card-top">
                <div className="image-pokemon">
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                </div>
                <h3>#{pokemon.id}</h3>
                <h3>{pokemon.name}</h3>
                <h3>Peso: {pokemon.weight} kg</h3>
                <h3>Altura: {pokemon.height} metros</h3>
            </div>

            <div className="card-bottom">
                {pokemon.types.map((type, index) => {
                    return (
                        
                        <div key={index} className="pokemon-type-text">
                            {type.type.name}
                        </div>
                    );
                })}
                 <button onClick={onHeartClick}> Favoritar {heart}</button>
            </div>
        </Container>
    );
}
