import React from "react";
import Pokemon from '../../assets/pokemon.svg'

import { Container } from './styles'

const PokeInfo = ({ data }) => {

    return (
        <>
            {
                (!data) ? '' : (
                    <>
                        <Container>
                            <h1>{data.name}</h1>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}></img>
                            <div className="abilities">
                                {
                                    data.abilities.map(poke => {
                                        return (
                                            <>
                                                <div className="group">
                                                    <h2>{poke.ability.name}</h2>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>


                            <div className="base-stat">
                                {
                                    data.stats.map(poke => {
                                        return (
                                            <>
                                                <h3>{poke.stat.name} : {poke.base_stat}</h3>
                                            </>
                                        )
                                    })
                                }
                            </div>

                        </Container>

                    </>
                )

            }

        </>
    )
}

export default PokeInfo