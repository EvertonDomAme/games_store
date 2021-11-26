import * as S from './Styled';

import { FaSearchPlus } from 'react-icons/fa';

export default function Search() {
  return (
    <S.Search>
      <S.SearchSpan>Procurar:</S.SearchSpan>
      <S.SearchForm>
        <FaSearchPlus />
        <S.ContentSearch type='text' placeholder='Procurar jogos por título, personagens, editora, etc'></S.ContentSearch>
        <S.SubmitSearch type='submit' value='Encontre' />
      </S.SearchForm>
    </S.Search>
  )
}