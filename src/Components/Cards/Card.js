import * as S from './Styled';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Card(props) {

  const navigate = useNavigate();

  const cardInfoShortCut = () => {
    navigate('/game', { state: props.id })
  }

  const wishItem = () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }
    const id = props.id;

    axios.get(`/game/wish/${id}`, config)
  }

  return (
    <S.Card>
      <S.WishList onClick={wishItem} >
        <FaRegHeart />
      </S.WishList>
      <S.CardItem onClick={cardInfoShortCut} >
        <div className='card-image'>
          <S.CardImg src={props.image} alt={props.title} />
        </div>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardPrice>{'R$ ' + props.preco}</S.CardPrice>
      </S.CardItem>
      
    </S.Card>
  )
}