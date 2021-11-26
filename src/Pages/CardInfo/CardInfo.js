import './CardInfo.css';
import Search from '../../Components/Search/Search';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegHeart } from 'react-icons/fa';


export default function CardInfo() {

  const state = useLocation()
  const id = state.state;

  const [game, setGame] = useState({})
  const [mounted, setMounted] = useState(false)

  const getData = async () => {
    await axios.get(`/game/find/${id}`)
    .then(response => {
      if(mounted) {
        setGame(response.data)
        console.log(game);
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
      
        <div className='game'>
        <div className='game-header'>
          <img src={game.image} alt={game.name} />
        </div>
        <div className='game-wish'>
          <h2>{game.name}</h2>
          <div className='game-like'>
            <span>R$ {game.price} </span>
            <a>
              <FaRegHeart />
            </a>
          </div>
        </div>
        <h3>{game.year}</h3>
        <p>{game.storyLine}</p>
        </div>
      
    </>
  )
}