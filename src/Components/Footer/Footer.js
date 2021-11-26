import * as S from './Styled';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <S.Footer>
      <S.Social>
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaTwitterSquare />
        <FaYoutubeSquare />
      </S.Social>
      <span>© Os jogos são propriedade de seus respectivos donos.</span>
      </S.Footer>
  )
}