import Container from '../../Components/Container/Container';
import Card from '../../Components/Cards/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function WishList() {

  const [wishList, setWishList ] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true);

    if(localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }
      axios.get('/game/myWishList', config)
      .then(response => {
        setNotLogged(false);
        setWishList(response.data.games)
      })
    }
  }, [mounted])

  console.log(notLogged)

  return(
    <Container title='Lista de Desejos'>
      { 
        wishList.map(game => (
          <Card 
            id = {game.id}
            image = {game.image}
            name = {game.name}
            preco = {game.price}
            key = {game.id}
          />
        ))
      }
    </Container>
  )
}