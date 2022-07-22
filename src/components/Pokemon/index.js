import React from "react";

import { Container, ContainerItems, ContainerImage } from "./styles";

export default function Pokemon(props) {
    const { pokemon } = props;

    return (
        <Container>
            <div className="card-top">
                <div className="image-pokemon">
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                </div>

                <h2>#{pokemon.id}</h2>
                <h3>{pokemon.name}</h3>
                <h4>Peso: {pokemon.weight} kg</h4>
                <h4>Altura: {pokemon.height} metros</h4>
            </div>

            <div className="card-bottom">
                {pokemon.types.map((type, index) => {
                    return (
                        <div key={index}>
                            {" "}
                            {type.type.name}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}
