import React, { useEffect, useState } from 'react'
import api from '../../services/api'


import { Container, ContainerInputSearch } from './styles'
import Header from '../../components/Header'
import Card from '../../components/Card';
import PokeInfo from '../../components/PokeInfo';

function Home() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(api)
  const [pokeDex, setPokeDex] = useState()


  const pokeFun = async () => {
    setLoading(true)
    const res = await api.get('/')
    getPokemon(res.data.results)
    setLoading(false)
    // console.log(pokemons)

  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await api.get(item.url)
      // console.log(result.data)
      setPokemons(state => {
        state = [...state, result.data]
        state.sort((a,b) => a.id>b.id?1:-1)
        return state;
      })
    })
  }

  useEffect(() => {
    pokeFun()
  }, [url])

  return (
    <>
      <Container>
        <Header></Header>
        <ContainerInputSearch>
          <input type="text" ></input>
        </ContainerInputSearch>
        <div className='left-content'>
          <Card pokemon={pokemons} loading={loading} infoPokemon={poke=>setPokeDex(poke)} ></Card>
        </div>
        <div className='right-content'>
            <PokeInfo data={pokeDex}></PokeInfo>
        </div>

      </Container>
    </>
  );
}

export default Home;
