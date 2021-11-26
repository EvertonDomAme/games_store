import Search from '../../Components/Search/Search';
import Slider from '../../Components/Slider/Slider';
import Container from '../../Components/Container/Container';
import Card from '../../Components/Cards/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      if(mounted) {
      setGames(response.data)
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
    <>
      <Search />
      <Slider
        id='4f969d05-ee63-4153-8bb4-66a55818e2ef'
        classificationText='Este jogo pode conter conteúdo não apropriado para todas as idades: violência frequente ou sangrenta, conteúdo adulto geral'
        classificationNumber='18 +'
      />
      <Container title='Buy me!'>
        {
          games.map(game => (
            <Card 
              id = {game.id}
              image = {game.image}
              title = {game.name}
              preco = {game.price}
              key = {game.id}
            />
          ))
        }
      </Container>
    </>
  )
}