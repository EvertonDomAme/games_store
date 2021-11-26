import * as S from './Styled';
import { FaAngleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

//props utilizada como parametro quando queremos passar informações para o slider
export default function Slider(props) {

  const [game, setGame] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/4f969d05-ee63-4153-8bb4-66a55818e2ef`)
    .then(response => {
      if(mounted) {
        setGame(response.data)
        }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
    <S.Slider>
      <S.Image src={game.image} alt={game.name} />
      <S.Bar>
        <S.Disponivel>Disponível</S.Disponivel>
        <S.MaisBtn>
          <S.MaisLink to='/' >Saiba Mais<FaAngleRight /></S.MaisLink>
        </S.MaisBtn>
        <S.Classification>
          <S.AgeClassification>
            {props.classificationNumber}
          </S.AgeClassification>
          <S.ClassText>{props.classificationText}</S.ClassText>
        </S.Classification>
        </S.Bar>
    </S.Slider>
  )
}